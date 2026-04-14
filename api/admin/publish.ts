import { VercelRequest, VercelResponse } from "@vercel/node";
import { Octokit } from "@octokit/rest";

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  embed_url: string;
}

interface RequestBody {
  action: 'update' | 'create';
  game: Game;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, game } = req.body as RequestBody;

    const githubToken = process.env.GITHUB_TOKEN;
    const githubOwner = process.env.GITHUB_OWNER;
    const githubRepo = process.env.GITHUB_REPO;
    const vercelToken = process.env.VERCEL_TOKEN;
    const vercelProjectId = process.env.VERCEL_PROJECT_ID;

    if (!githubToken || !githubOwner || !githubRepo) {
      return res.status(500).json({ error: 'GitHub credentials not configured' });
    }

    const octokit = new Octokit({ auth: githubToken });

    // Read current games-data.ts file
    const { data: fileData } = await octokit.repos.getContent({
      owner: githubOwner,
      repo: githubRepo,
      path: 'src/lib/games-data.ts',
    });

    if (Array.isArray(fileData)) {
      return res.status(500).json({ error: 'Path is a directory' });
    }

    const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8');

    // Parse and update games array
    let updatedContent = currentContent;
    const gameIdToFind = game.id;

    if (action === 'update') {
      // Replace existing game
      const gameRegex = new RegExp(
        `\\{\\s*id:\\s*"${gameIdToFind}"[^}]*\\}`,
        's'
      );

      const gameObject = JSON.stringify(game, null, 2)
        .split('\n')
        .map((line, i, arr) => i === 0 ? line : '  ' + line)
        .join('\n');

      updatedContent = updatedContent.replace(gameRegex, gameObject);
    } else if (action === 'create') {
      // Add new game to array
      const newId = Math.max(
        ...currentContent
          .match(/id:\s*"(\d+)"/g)
          ?.map(m => parseInt(m.match(/\d+/)?.[0] || '0')) || [0]
      ) + 1;

      const newGame = { ...game, id: newId.toString() };
      const gameObject = `  ${JSON.stringify(newGame)
        .slice(0, -1)}`;

      updatedContent = updatedContent.replace(
        /(\],\n\n);/,
        `],\n${gameObject},\n];`
      );
    }

    // Create feature branch
    const branchName = `admin-edit-${Date.now()}`;
    const mainRef = await octokit.git.getRef({
      owner: githubOwner,
      repo: githubRepo,
      ref: 'heads/main',
    });

    await octokit.git.createRef({
      owner: githubOwner,
      repo: githubRepo,
      ref: `refs/heads/${branchName}`,
      sha: mainRef.data.object.sha,
    });

    // Commit changes
    const commit = await octokit.repos.createOrUpdateFileContents({
      owner: githubOwner,
      repo: githubRepo,
      path: 'src/lib/games-data.ts',
      message: `[Admin] ${action === 'update' ? 'Updated' : 'Added'} game: ${game.title}`,
      content: Buffer.from(updatedContent).toString('base64'),
      branch: branchName,
      sha: fileData.sha,
    });

    // Create PR
    const pr = await octokit.pulls.create({
      owner: githubOwner,
      repo: githubRepo,
      title: `[Admin] ${action === 'update' ? 'Updated' : 'Added'} game: ${game.title}`,
      body: `Automated change from admin editor.\n\nGame: ${game.title}\nAction: ${action}`,
      head: branchName,
      base: 'main',
    });

    // Auto-merge PR
    await octokit.pulls.merge({
      owner: githubOwner,
      repo: githubRepo,
      pull_number: pr.data.number,
      merge_method: 'squash',
    });

    // Delete branch
    await octokit.git.deleteRef({
      owner: githubOwner,
      repo: githubRepo,
      ref: `heads/${branchName}`,
    });

    // Trigger Vercel redeploy if token available
    if (vercelToken && vercelProjectId) {
      try {
        await fetch(`https://api.vercel.com/v13/deployments?projectId=${vercelProjectId}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${vercelToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ skipBuildCache: true }),
        });
      } catch (deployError) {
        console.error('Vercel redeploy failed:', deployError);
        // Don't fail the whole request if deploy fails
      }
    }

    return res.status(200).json({
      success: true,
      message: `Game ${action === 'update' ? 'updated' : 'added'} and deployed`,
      pr_number: pr.data.number,
    });
  } catch (error) {
    console.error('Admin publish error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
