# Admin Editor Setup Guide

The PlayFrame admin editor allows you to manage games directly from the web interface with a simple keyboard shortcut.

## Quick Access

**Press `ALT + W`** to open the admin editor modal on any page of the site.

## Setup Instructions

### 1. Create GitHub Personal Access Token

1. Go to [GitHub Settings → Personal Access Tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Name it: `PlayFrame Admin`
4. Select scopes:
   - `repo` (full control of private repositories)
   - `workflow` (update GitHub Action workflows)
5. Copy the token (you won't see it again)

### 2. Get Your Vercel Token (Optional, for auto-redeploy)

1. Go to [Vercel Settings → Tokens](https://vercel.com/account/tokens)
2. Create a new token
3. Copy the token

### 3. Set Environment Variables

Add these to your Vercel project settings:

```
GITHUB_TOKEN=<your-github-token>
GITHUB_OWNER=CyberspaceYT
GITHUB_REPO=playframe
ADMIN_PASSWORD=<your-secure-password>
VERCEL_TOKEN=<your-vercel-token>
VERCEL_PROJECT_ID=prj_aEC5CLV6Tj5FGRbBKRsmZ867ZQAn
```

#### In Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add each variable above
4. **Important**: Make sure the API environment variables are added (they'll be used by the serverless function)

#### In v0 Project:
1. Click Settings (top right)
2. Click "Vars"
3. Add:
   - `VITE_ADMIN_PASSWORD` (for client-side password verification)

### 4. What the Admin Editor Does

#### Edit Existing Games
- Select a game from the dropdown
- Modify: Title, Description, Category, Thumbnail URL, Embed URL
- Click "Publish Changes"
- The system will:
  1. Create a git branch
  2. Update the games-data.ts file
  3. Create and auto-merge a PR
  4. Trigger a Vercel redeploy
  5. Delete the branch

#### Add New Games
- Fill in: Title, Description, Category, Thumbnail URL, Embed URL
- Click "Add Game"
- Same publishing flow as editing

### 5. Security Notes

- The admin password is stored in environment variables (kept private)
- The password is verified client-side, but the actual API calls are authenticated server-side with GitHub
- GitHub Personal Access Token is never exposed to the client
- Each admin action creates an audit trail in your git commit history

## Troubleshooting

### "Admin password not configured"
- Make sure `VITE_ADMIN_PASSWORD` is set in your v0 project Vars

### "Failed to publish: GitHub credentials not configured"
- Ensure `GITHUB_TOKEN`, `GITHUB_OWNER`, and `GITHUB_REPO` are set in your Vercel environment variables
- In Vercel: Project Settings → Environment Variables

### PR creation fails
- Check that the GitHub token has `repo` scope permissions
- Ensure you have admin access to the repository

### Changes don't appear after publishing
- Check that the redeploy was triggered in Vercel
- The change should appear within 1-2 minutes after publishing
- You can manually trigger a redeploy in Vercel if needed

## Advanced Usage

### Customize Admin Password
Edit the password in your environment variables to something secure. It should be:
- At least 12 characters
- Mix of letters, numbers, and special characters
- Only known to you and trusted collaborators

### Auto-Deploy Settings
The admin editor will automatically trigger a Vercel redeploy if `VERCEL_TOKEN` and `VERCEL_PROJECT_ID` are set. If you only have one of them, the publish will still work but the redeploy won't be triggered automatically (you'll need to manually redeploy in Vercel).

## Files Modified

- `/src/hooks/useAdminShortcut.ts` - Keyboard shortcut handler (ALT + W)
- `/src/components/AdminEditorModal.tsx` - Admin UI component
- `/src/App.tsx` - Integrated admin editor into app
- `/api/admin/publish.ts` - Serverless function for GitHub operations
- `/package.json` - Added Octokit and Vercel Node dependencies
