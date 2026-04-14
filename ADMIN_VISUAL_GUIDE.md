# Admin Editor - Visual Guide

## Screen 1: Launch Admin Editor

**Action:** Press `ALT + W` anywhere on the site

```
┌─────────────────────────────────────────────────────────┐
│  Your Site Here                                   ≡ ≡ ≡  │
│                                                          │
│  [Games Display...]                                      │
│                                                          │
│                                                          │
│          [ALT + W is pressed]                            │
└─────────────────────────────────────────────────────────┘

                              ↓

┌──────────────────────────────────────────────────────────┐
│  Admin Editor                              Close Button X │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  [Password Input Field]         [Unlock Admin Editor]    │
│   Enter admin password                                   │
│                                                           │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

## Screen 2: Authentication

**Action:** Type your admin password and click "Unlock Admin Editor"

```
┌──────────────────────────────────────────────────────────┐
│  Admin Editor                              Close Button X │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Password                                                 │
│  [••••••••••]                                             │
│                                                           │
│                [Unlock Admin Editor Button]              │
│                                                           │
└──────────────────────────────────────────────────────────┘

              ✓ Correct Password Entered

                              ↓

┌──────────────────────────────────────────────────────────┐
│  Admin Editor                              Close Button X │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  [Edit Game Tab] [Add Game Tab]                          │
│                                                           │
│  (Full editor interface appears)                          │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

## Screen 3: Edit Game Mode

**Tab 1: Edit Game**

```
┌──────────────────────────────────────────────────────────┐
│  Admin Editor                              Close Button X │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ [Edit Game Tab] [Add Game Tab]                           │
│ ─────────────────────────────────────                    │
│                                                           │
│ Select Game to Edit                                       │
│ [Dropdown ▼] (showing: Slope, PolyTrack, ...)            │
│                                                           │
│ Title                                                     │
│ [Slope                    ]                               │
│                                                           │
│ Description                                               │
│ [Roll a ball down a slope and avoid obstacles.]           │
│                                                           │
│ Category                                                  │
│ [Dropdown ▼] (action, puzzle, racing, ...)               │
│                                                           │
│ Thumbnail URL                                             │
│ [https://images.dwncdn.net/images/...]                   │
│                                                           │
│ Embed URL                                                 │
│ [https://slope-inf.vercel.app/]                          │
│                                                           │
│              [Publish Changes Button]                    │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

## Screen 4: Add Game Mode

**Tab 2: Add Game**

```
┌──────────────────────────────────────────────────────────┐
│  Admin Editor                              Close Button X │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ [Edit Game Tab] [Add Game Tab]                           │
│                   ─────────────                          │
│                                                           │
│ Title                                                     │
│ [                            ]                            │
│                                                           │
│ Description                                               │
│ [                                                      ]   │
│                                                           │
│ Category                                                  │
│ [Dropdown ▼] (action, puzzle, racing, ...)               │
│                                                           │
│ Thumbnail URL                                             │
│ [https://...                          ]                   │
│                                                           │
│ Embed URL                                                 │
│ [https://...                          ]                   │
│                                                           │
│                  [Add Game Button]                       │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

## Publishing Flow Diagram

```
                    [Admin Makes Change]
                            ↓
                  [Click "Publish Changes"]
                            ↓
                ┌─────────────────────────┐
                │   Serverless Function   │
                │  /api/admin/publish.ts  │
                └─────────────────────────┘
                            ↓
            ┌───────────────┴────────────────┐
            ↓                                ↓
    [Read Current File]              [Authenticate]
    from GitHub                       with Token
            ↓
    [Update/Create Game]
            ↓
    [Create Feature Branch]
    (auto-generated name)
            ↓
    [Commit Changes]
    (with git message)
            ↓
    [Create Pull Request]
            ↓
    [Auto-Merge PR]
            ↓
    [Delete Feature Branch]
            ↓
    [Trigger Vercel Redeploy]
            ↓
    ┌──────────────────────┐
    │   ✓ Success Toast    │
    │ "Changes published   │
    │  and deployed!"      │
    └──────────────────────┘
            ↓
    [Site redeployed with changes]
```

## File Structure

```
playframe/
├── src/
│   ├── components/
│   │   ├── AdminEditorModal.tsx    ← New: Admin UI
│   │   └── ...
│   ├── hooks/
│   │   ├── useAdminShortcut.ts     ← New: ALT+W listener
│   │   └── ...
│   ├── lib/
│   │   ├── games-data.ts           ← Modified: Games list
│   │   └── ...
│   ├── App.tsx                     ← Modified: Added admin integration
│   └── ...
├── api/
│   ├── admin/
│   │   └── publish.ts              ← New: GitHub API handler
│   └── ...
├── ADMIN_SETUP.md                  ← New: Setup guide
├── ADMIN_QUICKSTART.md             ← New: Quick start
├── API_DOCS.md                     ← New: API documentation
├── ADMIN_VISUAL_GUIDE.md           ← New: This file
└── ...
```

## Keyboard Shortcut

**Master Shortcut:** `ALT + W`

Hold `ALT` key and press `W` simultaneously:
- Windows/Linux: Hold `Alt`, press `W`
- macOS: Hold `Option`, press `W`

## Step-by-Step Usage Example

### Example: Updating a Game

1. **Press ALT + W** → Admin modal opens
2. **Enter Password** → `mySecurePassword123!`
3. **Click "Edit Game" tab** (if not already selected)
4. **Select Game** → Choose "Slope" from dropdown
5. **Edit Fields** → Update thumbnail URL, description, etc.
6. **Click "Publish Changes"** → Loading spinner appears
7. **Wait 5-10 seconds** → "Changes published and deployed!" toast appears
8. **Modal closes** → Changes are live on your site

### Example: Adding a New Game

1. **Press ALT + W** → Admin modal opens
2. **Enter Password** → `mySecurePassword123!`
3. **Click "Add Game" tab**
4. **Fill in Fields:**
   - Title: "My Awesome Game"
   - Description: "An awesome game about..."
   - Category: "Action"
   - Thumbnail: "https://image-url.jpg"
   - Embed URL: "https://game-url.com"
5. **Click "Add Game"** → Loading spinner
6. **Wait 5-10 seconds** → Success! Game added
7. **Modal closes** → Refresh to see new game

## Troubleshooting Visual Guide

```
Press ALT + W
     ↓
No modal appears?
     ├─ Check keyboard shortcut (ALT + W, not CTRL+W)
     └─ Try opening dev console for errors
     
Modal appears
     ↓
Enter password
     ↓
"Incorrect password" message?
     ├─ Check VITE_ADMIN_PASSWORD in v0 Settings → Vars
     └─ Try again
     
Password correct, enter editor
     ↓
Try to publish changes
     ↓
"Admin password not configured"?
     └─ Set VITE_ADMIN_PASSWORD in v0 Vars
     
"GitHub credentials not configured"?
     ├─ Check Vercel Environment Variables
     ├─ Ensure GITHUB_TOKEN is set
     ├─ Ensure GITHUB_OWNER and GITHUB_REPO are set
     └─ Wait 5 minutes for env vars to take effect

"Failed to publish: ..."?
     ├─ Check GitHub token has 'repo' scope
     ├─ Check token isn't expired
     ├─ Try a simpler test (edit game name only)
     └─ Check internet connection

Changes don't appear?
     ├─ Wait 1-2 minutes for Vercel redeploy
     ├─ Hard refresh your browser (Ctrl+Shift+R)
     └─ Check Vercel deployments dashboard
```

## Tips & Tricks

💡 **Quick Tip:** Keep ADMIN_QUICKSTART.md handy for reference

💡 **Batch Edits:** You can make changes one at a time, each creates a separate PR you can track

💡 **Undo:** Changes are in git history - you can revert from GitHub if needed

💡 **Testing:** Test new URLs before adding to the admin editor (copy full URL)

💡 **Categories:** Use exact category names from the dropdown (case-sensitive)

💡 **Thumbnails:** Make sure image URLs work in browser (test in new tab)

💡 **Embed URLs:** Some games might not embed due to CORS or headers - test manually first
