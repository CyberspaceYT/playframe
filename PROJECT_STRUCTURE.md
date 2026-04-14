# Project Structure - Admin Editor Files

## Complete File Map

```
playframe/
│
├── 📄 Root Documentation (Admin Editor)
│   ├── ADMIN_GETTING_STARTED.md        ← START HERE! (3-min setup)
│   ├── ADMIN_QUICKSTART.md             (30-sec reference)
│   ├── ADMIN_SETUP.md                  (detailed setup)
│   ├── ADMIN_VISUAL_GUIDE.md           (visual walkthrough)
│   ├── ADMIN_IMPLEMENTATION_SUMMARY.md (technical overview)
│   ├── API_DOCS.md                     (API reference)
│   ├── VERIFY_SETUP.md                 (testing guide)
│   ├── ADMIN_DOCS_INDEX.md             (navigation guide)
│   ├── CHANGELOG_ADMIN_EDITOR.md       (what changed)
│   └── PROJECT_STRUCTURE.md            (this file)
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── ✨ AdminEditorModal.tsx     (NEW - admin UI modal)
│   │   ├── CategoryChips.tsx
│   │   ├── Footer.tsx
│   │   ├── GameCard.tsx
│   │   ├── NavLink.tsx
│   │   ├── Navbar.tsx
│   │   ├── OnlineStatus.tsx
│   │   ├── PopularGames.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── 📁 ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── ... (all shadcn/ui components)
│   │       └── tooltip.tsx
│   │
│   ├── 📁 hooks/
│   │   ├── ✨ useAdminShortcut.ts      (NEW - ALT+W listener)
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useTabVisibility.ts
│   │
│   ├── 📁 lib/
│   │   ├── games-data.ts               (games list - unchanged)
│   │   ├── supabase.ts
│   │   ├── utils.ts
│   │   └── visit-tracker.ts
│   │
│   ├── 📁 pages/
│   │   ├── Categories.tsx
│   │   ├── Create.tsx
│   │   ├── GamePlayer.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── 📁 contexts/
│   │   └── AuthContext.tsx
│   │
│   ├── 📁 test/
│   │   ├── example.test.ts
│   │   └── setup.ts
│   │
│   ├── ✏️ App.tsx                      (MODIFIED - admin integration)
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── contexts/
│
├── 📁 api/
│   └── 📁 admin/
│       └── ✨ publish.ts               (NEW - GitHub API handler)
│
├── 📁 public/
│   ├── create-editor.html
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── games/
│   │   └── chicken-cs.html
│   ├── placeholder.svg
│   └── robots.txt
│
├── 📁 scripts/
│   └── 001_create_tables.sql
│
├── 📄 Configuration Files
│   ├── ✏️ package.json                 (MODIFIED - added 2 dependencies)
│   ├── package-lock.json
│   ├── pnpm-lock.yaml
│   ├── bun.lockb
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── tailwind.config.ts
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   ├── eslint.config.js
│   ├── postcss.config.js
│   ├── components.json
│   └── index.html
│
└── 📄 Project Files
    ├── README.md
    └── favicon
```

---

## 🆕 New Files Summary

### Frontend
| File | Type | Lines | Purpose |
|------|------|-------|---------|
| `src/hooks/useAdminShortcut.ts` | Hook | 17 | Listen for ALT+W |
| `src/components/AdminEditorModal.tsx` | Component | 285 | Admin UI modal |

### Backend
| File | Type | Lines | Purpose |
|------|------|-------|---------|
| `api/admin/publish.ts` | API | 169 | GitHub operations |

### Documentation
| File | Type | Lines | Purpose |
|------|------|-------|---------|
| `ADMIN_GETTING_STARTED.md` | Guide | 213 | Quick start |
| `ADMIN_QUICKSTART.md` | Guide | 76 | 30-sec reference |
| `ADMIN_SETUP.md` | Guide | 113 | Detailed setup |
| `ADMIN_VISUAL_GUIDE.md` | Guide | 290 | Visual walkthrough |
| `ADMIN_IMPLEMENTATION_SUMMARY.md` | Guide | 261 | Technical overview |
| `API_DOCS.md` | Guide | 140 | API reference |
| `VERIFY_SETUP.md` | Guide | 273 | Testing checklist |
| `ADMIN_DOCS_INDEX.md` | Guide | 250 | Navigation |
| `CHANGELOG_ADMIN_EDITOR.md` | Guide | 432 | Detailed changelog |
| `PROJECT_STRUCTURE.md` | Guide | This | File map |

---

## ✏️ Modified Files

### src/App.tsx
**Changes:**
- Added import: `useAdminShortcut` hook
- Added import: `AdminEditorModal` component
- Added state: `adminOpen` for modal visibility
- Added hook call: `useAdminShortcut(() => setAdminOpen(true))`
- Added component: `<AdminEditorModal>` in JSX
- Lines added: ~7

### package.json
**Changes:**
- Added dependency: `@octokit/rest` (^20.1.1)
- Added dependency: `@vercel/node` (^3.0.0)
- Lines added: 2

---

## 📊 Code Statistics

### New Code
| Type | Count | Lines |
|------|-------|-------|
| Frontend Components | 2 | ~302 |
| Backend API | 1 | ~169 |
| **Total Code** | **3** | **~471** |

### Documentation
| Type | Count | Lines |
|------|-------|-------|
| Documentation Files | 10 | ~2,271 |
| **Total Docs** | **10** | **~2,271** |

### Modifications
| Type | Count |
|------|-------|
| Files Modified | 1 |
| Dependencies Added | 2 |
| Environment Variables | 7 |

---

## 🔑 Key Directories

### Components
```
src/components/
├── AdminEditorModal.tsx     ← Main UI component
├── GameCard.tsx             (displays games)
├── Navbar.tsx               (top navigation)
└── ui/                      (shadcn/ui components)
```

### Hooks
```
src/hooks/
├── useAdminShortcut.ts      ← Admin keyboard shortcut
├── useTabVisibility.ts      (tab focus detection)
└── use-toast.ts             (notifications)
```

### Library
```
src/lib/
├── games-data.ts            ← Games list (edited by admin)
├── supabase.ts              (database)
└── utils.ts                 (helpers)
```

### Pages
```
src/pages/
├── Index.tsx                (home page)
├── GamePlayer.tsx           (game view)
├── Categories.tsx           (category view)
└── Create.tsx               (create page)
```

### API
```
api/
└── admin/
    └── publish.ts           ← Admin API endpoint
```

---

## 🌳 Dependency Tree

```
AdminEditorModal.tsx
├─ Dialog (shadcn/ui)
│  └─ RadixUI
├─ Button (shadcn/ui)
├─ Input (shadcn/ui)
├─ Label (shadcn/ui)
├─ Textarea (shadcn/ui)
├─ Select (shadcn/ui)
├─ Tabs (shadcn/ui)
└─ sonner (toast notifications)

useAdminShortcut.ts
└─ React (useEffect)

App.tsx
├─ React Router
├─ React Query
├─ Radix UI Providers
├─ Theme Provider
├─ AdminEditorModal
└─ useAdminShortcut

api/admin/publish.ts
├─ @vercel/node (handler)
├─ @octokit/rest (GitHub API)
└─ Node.js built-ins
```

---

## 📝 File Relationships

```
┌─────────────────────────────────────┐
│  User Interface (Browser)           │
│  ┌──────────────────────────────┐   │
│  │ App.tsx                      │   │
│  │ - useAdminShortcut hook      │   │
│  │ - AdminEditorModal component │   │
│  └──────────────────────────────┘   │
└───────────┬─────────────────────────┘
            │
        ALT + W
            │
            ▼
┌─────────────────────────────────────┐
│  Admin Modal                        │
│  ┌──────────────────────────────┐   │
│  │ AdminEditorModal.tsx         │   │
│  │ - Password auth              │   │
│  │ - Edit game form             │   │
│  │ - Add game form              │   │
│  │ - Publish button             │   │
│  └──────────────────────────────┘   │
└───────────┬─────────────────────────┘
            │
      Click Publish
            │
            ▼
┌─────────────────────────────────────┐
│  API Request (HTTP POST)            │
│  /api/admin/publish                 │
│  - Action: update/create            │
│  - Game data                        │
└───────────┬─────────────────────────┘
            │
            ▼
┌─────────────────────────────────────┐
│  Backend Serverless Function        │
│  ┌──────────────────────────────┐   │
│  │ api/admin/publish.ts         │   │
│  │ - GitHub Octokit client      │   │
│  │ - File operations            │   │
│  │ - Branch management          │   │
│  │ - PR creation & merge        │   │
│  │ - Vercel redeploy trigger    │   │
│  └──────────────────────────────┘   │
└───────────┬─────────────────────────┘
            │
            ├──────────────────┐
            │                  │
            ▼                  ▼
    GitHub Repo          Vercel Deploy
    ├─ Branch created    └─ Redeploy triggered
    ├─ File updated
    ├─ PR created
    ├─ PR merged
    └─ Branch deleted
```

---

## 🔐 Environment Variables Map

```
Browser (Client-Side)
├─ VITE_ADMIN_PASSWORD
│  └─ Password input verification
│
API/Serverless (Server-Side)
├─ GITHUB_TOKEN
│  └─ GitHub API authentication
├─ GITHUB_OWNER
│  └─ Repository owner
├─ GITHUB_REPO
│  └─ Repository name
├─ VERCEL_TOKEN (optional)
│  └─ Vercel API authentication
└─ VERCEL_PROJECT_ID (optional)
   └─ Vercel project identifier
```

---

## 📚 How Files Interact

### User Opens Admin Editor
1. User presses ALT + W
2. `useAdminShortcut` hook detects key combination
3. Sets `adminOpen` state in App.tsx
4. Renders `AdminEditorModal` component
5. Modal appears on screen

### User Publishes Changes
1. User clicks "Publish Changes" button
2. `AdminEditorModal` makes POST request to `/api/admin/publish`
3. Request body contains: action (update/create) and game data
4. `api/admin/publish.ts` serverless function receives request
5. Uses Octokit to:
   - Read current games-data.ts
   - Create branch
   - Update file
   - Commit changes
   - Create PR
   - Auto-merge PR
   - Delete branch
6. If Vercel tokens available, trigger redeploy
7. Returns success response
8. Modal shows success toast and closes

### Site Updates
1. Vercel detects merged PR
2. Starts new deployment
3. Pulls latest code including game changes
4. Rebuilds site
5. Deploys new version
6. Site updates live

---

## 🎯 Entry Points

### For Users
- **Entry Point:** Any page of the site
- **Action:** Press ALT + W
- **Target:** `AdminEditorModal` in App.tsx

### For Developers
- **Frontend:** `src/components/AdminEditorModal.tsx`
- **Hook:** `src/hooks/useAdminShortcut.ts`
- **Integration:** `src/App.tsx`
- **Backend:** `api/admin/publish.ts`
- **Configuration:** `package.json`

### For Documentation
- **Quick Start:** `ADMIN_GETTING_STARTED.md`
- **Reference:** `ADMIN_QUICKSTART.md`
- **Details:** `ADMIN_SETUP.md`
- **Visual:** `ADMIN_VISUAL_GUIDE.md`
- **Technical:** `API_DOCS.md` & `ADMIN_IMPLEMENTATION_SUMMARY.md`
- **Testing:** `VERIFY_SETUP.md`
- **Index:** `ADMIN_DOCS_INDEX.md`

---

## ✨ Quick Reference

**To understand the system:**
1. Start with `ADMIN_GETTING_STARTED.md`
2. Read `ADMIN_IMPLEMENTATION_SUMMARY.md`
3. Check `this file` (PROJECT_STRUCTURE.md)
4. Review actual code files

**To set it up:**
1. Follow `ADMIN_SETUP.md`
2. Run through `VERIFY_SETUP.md`

**To use it:**
1. Press ALT + W
2. Follow the UI

**To troubleshoot:**
1. Check relevant documentation
2. Use `VERIFY_SETUP.md` checklist
3. Review error messages in browser console

---

## 🚀 That's It!

You now understand the complete structure of the admin editor system. All code is organized logically and documented extensively.

**Next step:** Read `ADMIN_GETTING_STARTED.md` to set it up!
