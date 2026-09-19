# Deploy

- **Host:** Vercel project `srigokulkrishnans-projects/cosmonus`, serving https://www.cosmonus.com (the bare domain
  redirects to www). Vercel builds from GitHub: **https://github.com/srigokulkrish/Cosmonus** (public).
- **Flow:** push to a branch → Vercel builds a preview URL (shown on the GitHub commit / Vercel dashboard); merge to
  `main` → Vercel deploys production.
- **Not published:** `raw/` (design handoff + third-party reference screenshots), `.claude/`, env files — see `.gitignore`.
- **Env (Vercel → Settings → Environment Variables):** optional `GOOGLE_SITE_VERIFICATION` (see seo.md). No others:
  the contact form opens the visitor's email app (the old site's Resend API route is gone).
- **This folder is not the git repo.** On 2026-09-19 the site was copied into a clone of the repo on branch `redesign`
  (commit 1b92232, on top of the old site's 65ff9a6) and pushed for a preview. To keep working with git, clone the repo
  and copy changes in, or turn this folder into a clone (`git init`, add the remote, fetch, and check out `redesign`).
- Large file: `public/media/careers/banner.mp4` is ~57 MB (GitHub warns over 50 MB; hard limit 100 MB). Re-encode it
  if more large media is added, or move media to Git LFS / a CDN.
