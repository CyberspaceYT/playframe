# Admin Editor - Quick Start

## 🚀 30-Second Setup

1. **Create GitHub Token**
   - https://github.com/settings/tokens
   - Generate new token (classic), select `repo` + `workflow` scopes
   - Copy the token

2. **Add to Vercel Environment**
   - Go to Vercel project → Settings → Environment Variables
   - Add these 3 variables:
     ```
     GITHUB_TOKEN=<your-token-from-step-1>
     GITHUB_OWNER=CyberspaceYT
     GITHUB_REPO=playframe
     ```

3. **Set Admin Password**
   - In v0: Settings → Vars
   - Add: `VITE_ADMIN_PASSWORD=<pick-a-secure-password>`

4. **Done!** Press `ALT + W` anywhere on the site

## 🎮 How to Use

### Edit a Game
- `ALT + W` → Enter password → "Edit Game" tab
- Select game → Modify fields → "Publish Changes"

### Add New Game
- `ALT + W` → Enter password → "Add Game" tab
- Fill in details → "Add Game"

### What Happens When You Publish
1. ✅ Creates a git branch
2. ✅ Updates games-data.ts
3. ✅ Makes a GitHub PR
4. ✅ Auto-merges the PR
5. ✅ Deletes the branch
6. ✅ Deploys to Vercel (if token set)

## 🔒 Optional: Auto-Deploy (Bonus)

For automatic redeploy after publishing:
- Get Vercel token: https://vercel.com/account/tokens
- Add to Vercel environment variables:
  ```
  VERCEL_TOKEN=<your-token>
  VERCEL_PROJECT_ID=prj_aEC5CLV6Tj5FGRbBKRsmZ867ZQAn
  ```

## ⚙️ Environment Variables Checklist

**In Vercel (Project Settings → Environment Variables):**
- [ ] `GITHUB_TOKEN` - Your GitHub personal access token
- [ ] `GITHUB_OWNER` - `CyberspaceYT`
- [ ] `GITHUB_REPO` - `playframe`
- [ ] `VERCEL_TOKEN` (optional) - For auto-deploy
- [ ] `VERCEL_PROJECT_ID` (optional) - For auto-deploy

**In v0 (Settings → Vars):**
- [ ] `VITE_ADMIN_PASSWORD` - Your secure password

## 📝 Pro Tips

- **Unique passwords** - Use a strong, unique password for security
- **Check git history** - Every change creates a commit you can see
- **Preview first** - Test games before adding them
- **Keep tokens safe** - Never share your tokens publicly
- **Fallback method** - If admin editor fails, you can still edit games-data.ts manually

## 🐛 Issues?

Check `ADMIN_SETUP.md` for detailed troubleshooting guide.
