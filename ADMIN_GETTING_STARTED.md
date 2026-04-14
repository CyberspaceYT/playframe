# 🎮 Admin Editor - Getting Started

## What You Just Got

A complete admin editing system for your PlayFrame site. Press **ALT + W** anywhere to edit games, add new ones, and instantly publish changes to GitHub and Vercel.

---

## 🚀 Get Running in 3 Minutes

### Step 1: Create GitHub Token (1 minute)
1. Visit: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: `PlayFrame Admin`
4. Checkboxes: Check `repo` and `workflow`
5. Scroll down, click "Generate token"
6. **Copy the token** (save it somewhere)

### Step 2: Add to Vercel (1 minute)
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click: Settings → Environment Variables
4. Add these 3:
   ```
   GITHUB_TOKEN = <paste-token-from-step-1>
   GITHUB_OWNER = CyberspaceYT
   GITHUB_REPO = playframe
   ```
5. Click "Save"

### Step 3: Set Password in v0 (1 minute)
1. In v0: Click Settings (top right)
2. Click "Vars"
3. Add:
   ```
   VITE_ADMIN_PASSWORD = <pick-a-password>
   ```
4. Save

**Done!** ✅

---

## 🎯 Use It Right Now

1. Open your site
2. Press **ALT + W**
3. Enter your password
4. Edit or add a game
5. Click "Publish Changes"
6. **Boom!** Changes go live in 1-2 minutes

---

## 📚 Documentation

For more help:
- **Quick reference:** `ADMIN_QUICKSTART.md`
- **Detailed setup:** `ADMIN_SETUP.md`
- **Visual guide:** `ADMIN_VISUAL_GUIDE.md`
- **Technical details:** `API_DOCS.md`
- **Troubleshooting:** `VERIFY_SETUP.md`
- **Complete index:** `ADMIN_DOCS_INDEX.md`

---

## 🔧 What Gets Built

When you click "Publish Changes":
1. Creates a git branch automatically
2. Updates games-data.ts with your changes
3. Creates a GitHub Pull Request
4. Auto-merges the PR
5. Cleans up the branch
6. Triggers Vercel redeploy
7. Your site updates live

All tracked in git history, so you can revert anything anytime.

---

## ⌨️ Keyboard Shortcut

**ALT + W** on any page to open admin editor
- Windows/Linux: Hold `Alt`, press `W`
- macOS: Hold `Option`, press `W`

---

## 🔒 Security

- Password protected
- GitHub token never exposed to browser
- All changes in git history
- Easy to undo/revert
- Only you need to know the password

---

## ❓ Quick FAQ

**Q: How do I edit a game?**
A: ALT + W → Select game → Edit → Publish

**Q: How do I add a game?**
A: ALT + W → "Add Game" tab → Fill details → Add Game

**Q: How do I undo changes?**
A: All changes in GitHub history. You can revert from there.

**Q: Can multiple people use this?**
A: Currently one password. Share the password with trusted people.

**Q: Where's the password stored?**
A: In Vercel environment variables (hidden from public).

**Q: Does it auto-deploy?**
A: Yes! To Vercel in 1-2 minutes after you publish.

---

## 🆘 Troubleshooting

### Modal won't open?
- Check: Click page first, then ALT + W
- Try: Ctrl+Shift+R to refresh

### Wrong password?
- Check: You set VITE_ADMIN_PASSWORD in v0 Vars
- Type: Exactly as you set it (case-sensitive)

### Publish fails?
- Check: GitHub token is valid
- Check: Token has `repo` scope
- Wait: 2 minutes for Vercel vars to update

### Changes don't appear?
- Wait: 2 minutes for deployment
- Refresh: Hard refresh (Ctrl+Shift+R)
- Check: Vercel dashboard for deploy status

---

## 📋 Environment Variables Setup Checklist

**In Vercel (Settings → Environment Variables):**
- [ ] `GITHUB_TOKEN` - Your GitHub token
- [ ] `GITHUB_OWNER` - `CyberspaceYT`
- [ ] `GITHUB_REPO` - `playframe`

**In v0 (Settings → Vars):**
- [ ] `VITE_ADMIN_PASSWORD` - Your password

**Done?** Try pressing ALT + W!

---

## 🎓 Learning Path

1. **Just want it working?** → You're done! Press ALT + W
2. **Want more details?** → Read `ADMIN_QUICKSTART.md`
3. **Need full setup guide?** → Read `ADMIN_SETUP.md`
4. **Visual learner?** → Read `ADMIN_VISUAL_GUIDE.md`
5. **Technical deep dive?** → Read `API_DOCS.md`

---

## 💡 Pro Tips

1. **Test first:** Try editing a game you don't care about
2. **Check git:** All changes visible in GitHub commit history
3. **Easy revert:** Can undo any change from GitHub if needed
4. **Share password:** Give trusted friends access by sharing password
5. **Monitor deploys:** Check Vercel dashboard to see redeploys

---

## 🚀 Next Steps

### Right Now
1. Make sure you've done the 3-minute setup above
2. Press ALT + W to test
3. Edit a game or add a new one
4. Watch the magic happen!

### When You're Comfortable
- Read `ADMIN_VISUAL_GUIDE.md` for detailed walkthroughs
- Read `ADMIN_SETUP.md` for security best practices
- Check `ADMIN_DOCS_INDEX.md` for quick reference

### Optional Enhancements
- Add `VERCEL_TOKEN` for auto-redeploy (in `ADMIN_QUICKSTART.md`)
- Add more admins (share password or future multi-user feature)
- Delete games (currently requires manual edit)

---

## ✨ Summary

You now have a working admin editor. Just:
1. ✅ Set 3 environment variables (done above)
2. ✅ Set your password (done above)
3. ✅ Press **ALT + W** anytime
4. ✅ Edit or add games
5. ✅ Click publish
6. ✅ Changes go live!

**That's it!** Welcome to effortless game management. 🎮

---

**Next:** Press ALT + W and try editing a game!
