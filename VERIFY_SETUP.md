# Verify Admin Editor Setup

Follow this guide to verify everything is working correctly.

## 🔍 Step 1: Check Files Exist

Run this to confirm all new files are in place:

```bash
# Check frontend files
ls -la src/hooks/useAdminShortcut.ts
ls -la src/components/AdminEditorModal.tsx

# Check API
ls -la api/admin/publish.ts

# Check docs
ls -la ADMIN_QUICKSTART.md
ls -la ADMIN_SETUP.md
ls -la API_DOCS.md
```

**Expected:** All files exist

## 🔧 Step 2: Check Environment Variables

### In Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click Settings → Environment Variables
4. **Verify these exist:**
   - ✅ `GITHUB_TOKEN` (starts with `ghp_`)
   - ✅ `GITHUB_OWNER` (should be `CyberspaceYT`)
   - ✅ `GITHUB_REPO` (should be `playframe`)
   - ⚠️ `VERCEL_TOKEN` (optional, for auto-redeploy)
   - ⚠️ `VERCEL_PROJECT_ID` (optional, for auto-redeploy)

### In v0 Project
1. Click Settings (top right) → Vars
2. **Verify:**
   - ✅ `VITE_ADMIN_PASSWORD` (set to your password)

**If missing any:**
- Add them now before proceeding
- Wait 2-5 minutes for changes to propagate

## 🌐 Step 3: Start Dev Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun run dev
```

**Expected output:**
```
➜  vite v5.x.x
➜  Local:   http://localhost:5173/
```

Navigate to `http://localhost:5173` in your browser.

## ⌨️ Step 4: Test ALT + W Shortcut

1. Click anywhere on the page
2. Press `ALT + W` (hold Alt, press W)
3. **Expected:** A modal appears with title "Admin Editor"

**If nothing happens:**
- Check browser console (F12) for errors
- Verify Alt+W is not taken by your OS (try different shortcut in useAdminShortcut.ts)
- Try refreshing the page

## 🔐 Step 5: Test Password Authentication

1. Modal should ask for password
2. Type your `VITE_ADMIN_PASSWORD`
3. Click "Unlock Admin Editor"

**If "Incorrect password":**
- Check you typed it correctly
- Make sure VITE_ADMIN_PASSWORD is set in v0 Vars
- Case-sensitive!

**If "Admin password not configured":**
- Set VITE_ADMIN_PASSWORD in v0 project Vars
- Refresh the page

## 📋 Step 6: Test Admin Editor UI

After unlocking, you should see two tabs:
- Tab 1: "Edit Game" with dropdown of existing games
- Tab 2: "Add Game" with empty form

**Expected:**
- Dropdown populates with games (Slope, PolyTrack, etc.)
- Form fields are empty in "Add Game" tab
- Can select and edit a game

**If dropdowns are empty:**
- Check that games-data.ts is loading correctly
- Check browser console for import errors

## 🧪 Step 7: Test Edit Functionality (Local)

1. Select a game from dropdown
2. Modify the title (add "TEST" to the end)
3. Try clicking "Publish Changes"

**Expected:** Error about GitHub credentials (expected in local dev)

```
"GitHub credentials not configured"
```

This is **normal** for local development - the API needs real GitHub token.

**To test publishing:**
- Deploy to Vercel (where env vars are set)
- The error will go away once on production

## ✅ Step 8: Check Implementation in Code

Verify the code is properly integrated:

### Check App.tsx has admin integration
```bash
grep -n "useAdminShortcut\|AdminEditorModal" src/App.tsx
```

**Expected:** Should find both imports and usage

### Check AdminEditorModal exists and has expected exports
```bash
grep -n "export const AdminEditorModal" src/components/AdminEditorModal.tsx
```

**Expected:** Found at line

### Check API file exists
```bash
ls -la api/admin/publish.ts
```

**Expected:** File exists

## 🚀 Step 9: Deploy to Vercel

To test with real GitHub integration:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add admin editor with GitHub integration"
   git push
   ```

2. Vercel will auto-deploy
3. Once deployed, test on production site:
   - Press ALT + W
   - Enter password
   - Try editing a game
   - Click "Publish Changes"

**First deploy checklist:**
- ✅ Code pushed to GitHub
- ✅ Vercel deployment in progress
- ✅ Environment variables are set in Vercel
- ✅ Wait 2-5 minutes for deployment to complete

## 📊 Step 10: Verify GitHub Integration Works

Once deployed:

1. Open admin editor (`ALT + W`)
2. Select a game and edit title
3. Click "Publish Changes"

**Expected sequence:**
1. Loading spinner appears (1-2 seconds)
2. Success toast: "Changes published and deployed!"
3. Modal closes

**Then check GitHub:**
1. Go to your repo: https://github.com/CyberspaceYT/playframe
2. Check Pull Requests
3. **Expected:** 
   - New PR created with name like "[Admin] Updated game: Slope"
   - PR is already merged
   - Branch deleted

**Then check git log:**
```bash
git log --oneline | head -5
```

**Expected:** Top commit from admin editor with message like "[Admin] Updated game: Slope"

## 🔄 Step 11: Verify Site Updates

1. Wait 1-2 minutes for Vercel redeploy
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Navigate to your site
4. Check if the game you edited shows the changes

**If changes don't appear:**
- Check Vercel deployments (should be in progress)
- Wait another minute
- Try hard refresh
- Check browser dev console for errors

## 📋 Troubleshooting Checklist

If something doesn't work, check:

### Modal won't open with ALT + W
- [ ] Browser focused on page (click page first)
- [ ] Alt+W not taken by OS shortcut
- [ ] Console errors (F12)
- [ ] Try different browser

### Can't unlock admin editor
- [ ] VITE_ADMIN_PASSWORD set in v0 Vars
- [ ] Password matches exactly (case-sensitive)
- [ ] Try refreshing page
- [ ] Check console for errors

### Publish button shows error
- [ ] GITHUB_TOKEN set in Vercel
- [ ] GITHUB_OWNER set in Vercel
- [ ] GITHUB_REPO set in Vercel
- [ ] Token has `repo` scope
- [ ] Token isn't expired

### Changes don't appear after publishing
- [ ] Wait 2-5 minutes for Vercel deployment
- [ ] Hard refresh browser
- [ ] Check Vercel dashboard for errors
- [ ] Check GitHub for PR (might have failed)

### Other issues
- [ ] Check console (F12) for error messages
- [ ] Read the specific error message carefully
- [ ] Check relevant documentation file
- [ ] Try in different browser
- [ ] Try with fresh PR (not existing game)

## 📞 Quick Reference

| Component | File | Purpose |
|-----------|------|---------|
| Shortcut Listener | `src/hooks/useAdminShortcut.ts` | Detects ALT + W |
| Admin Modal | `src/components/AdminEditorModal.tsx` | UI for editing |
| API Handler | `api/admin/publish.ts` | GitHub operations |
| Integration | `src/App.tsx` | Wires everything together |

## ✨ Success Indicators

Everything is working when:
- ✅ ALT + W opens modal
- ✅ Password unlocks editor
- ✅ Can see and edit games
- ✅ Can add new games
- ✅ Publishing creates PR
- ✅ PR auto-merges
- ✅ Changes appear on site

**Congratulations!** Your admin editor is fully functional! 🎉
