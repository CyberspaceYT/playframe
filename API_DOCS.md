# Admin API Documentation

## Endpoint: `/api/admin/publish`

Serverless function that handles publishing game changes to the repository.

### Request

**Method:** POST

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "action": "update" | "create",
  "game": {
    "id": "1",
    "title": "Game Title",
    "description": "Game description",
    "category": "action",
    "thumbnail_url": "https://...",
    "embed_url": "https://..."
  }
}
```

### Response

**Success (200):**
```json
{
  "success": true,
  "message": "Game updated and deployed",
  "pr_number": 42
}
```

**Error (400-500):**
```json
{
  "error": "Error message describing what went wrong"
}
```

## Environment Variables Required

These must be set in your Vercel project:

| Variable | Description | Example |
|----------|-------------|---------|
| `GITHUB_TOKEN` | GitHub Personal Access Token with `repo` and `workflow` scopes | `ghp_...` |
| `GITHUB_OWNER` | GitHub username or organization | `CyberspaceYT` |
| `GITHUB_REPO` | Repository name | `playframe` |
| `VERCEL_TOKEN` | (Optional) Vercel API token for auto-redeploy | `VercelTokenXxx` |
| `VERCEL_PROJECT_ID` | (Optional) Vercel project ID for auto-redeploy | `prj_...` |

## How It Works

### Update Flow (action: "update")
1. Fetches current `src/lib/games-data.ts` from GitHub
2. Finds the game with matching ID
3. Replaces the entire game object
4. Creates a feature branch with timestamp
5. Commits the changes
6. Creates a Pull Request
7. Auto-merges the PR
8. Deletes the feature branch
9. Triggers Vercel redeploy (if tokens provided)

### Create Flow (action: "create")
1. Same as update, but appends a new game
2. Automatically generates new ID (highest existing ID + 1)
3. Rest of flow is identical

## Security Considerations

- ✅ GitHub Token is never exposed to the client
- ✅ All operations are authenticated server-side
- ✅ Creates audit trail through git commits
- ✅ Each change can be reviewed in PR history
- ✅ Can be reverted easily if needed
- ⚠️ The GitHub token should have minimal necessary permissions

## Rate Limiting

- GitHub API: Standard rate limits apply (60 requests/hour unauthenticated, 5,000 authenticated)
- Vercel API: Standard rate limits apply
- Recommend: Add a rate limiter if this endpoint becomes heavily used

## Error Handling

Common errors and solutions:

| Error | Cause | Solution |
|-------|-------|----------|
| `GitHub credentials not configured` | Missing env variables | Set GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO |
| `Method not allowed` | Not a POST request | Use POST method |
| `Path is a directory` | games-data.ts is a folder | Check file path is correct |
| `Failed to merge` | Merge conflicts or permissions | Check token has repo access |

## Testing

### Local Testing
```bash
curl -X POST http://localhost:3000/api/admin/publish \
  -H "Content-Type: application/json" \
  -d '{
    "action": "create",
    "game": {
      "id": "test",
      "title": "Test Game",
      "description": "A test game",
      "category": "action",
      "thumbnail_url": "https://example.com/thumb.jpg",
      "embed_url": "https://example.com/game"
    }
  }'
```

### Production Testing
The AdminEditorModal component handles the request. Just use the UI:
1. Press `ALT + W`
2. Enter password
3. Make changes
4. Click "Publish Changes" or "Add Game"
5. Check Vercel deployment and GitHub PRs

## Future Enhancements

- [ ] Delete game functionality
- [ ] Batch operations (edit multiple games)
- [ ] Undo/revert recent changes
- [ ] Preview changes before publishing
- [ ] Change history timeline
- [ ] Collaborative editing with user tracking
