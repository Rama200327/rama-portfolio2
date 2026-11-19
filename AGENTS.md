<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All portfolio text (bio, experience, projects, skills, contact links) lives in `src/content/profile.ts`; pages only render it, so content edits happen in one place.
- Each portfolio section (home, projects, experience, contact) is its own route with its own `head()`, so every page is shareable and crawlable.
- The site also deploys to GitHub Pages: `.github/workflows/deploy-pages.yml` builds with `GITHUB_PAGES_BASE` set, which makes `vite.config.ts` emit a fully prerendered static site under that sub-path; keep public-file links prefixed with `import.meta.env.BASE_URL` so they work on both hosts. When the repo variable `PAGES_REPO` is set, the workflow pushes only the built site to that public repo so the source repo can stay private on GitHub's free plan.
- The downloadable CV is a real file in `public/` (not a Lovable asset pointer) because GitHub Pages cannot serve Lovable-hosted asset URLs.
