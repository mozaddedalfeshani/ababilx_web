# AbabilX Main (Next.js)

Landing shell for AbabilX. Most UI comes from **shadcn** (`src/components/ui`); feature pieces live under `src/components/*`.

## Structure

```
ababilx_main/
├── public/hero.png + logo.png
├── legal/                        # legal markdown (copied from Ababil-X-frontend)
├── src/app/
│   ├── page.tsx                  # → HomePageClient
│   ├── privacy-policy/page.tsx   # all legal docs (same as Workspace frontend)
│   ├── account-deletion/page.tsx
│   └── data-deletion/page.tsx
├── src/components/legal/legal-markdown/
├── src/components/hero/          # landing hero art (Ababil-X-frontend match)
├── src/components/home/
│   ├── navbar/                   # fixed glass navbar + auth
│   ├── cta/                      # bottom CTA card
│   └── shared/                   # locale + google icon
├── src/components/ui/            # shadcn
└── src/lib/auth.ts               # Google OAuth redirect
```

## Commands

```bash
bun run dev
bun run lint
bun run build
```

## Notes

- Package manager: **bun**
- Hardcoded light theme
- Auth / outbound links: `NEXT_PUBLIC_API_URL` (default `https://api.ababilx.com`) + `/auth/google`; Paper / Workspace / Play Store URLs in `src/lib/seo.ts`
- Hero CTAs: Paper, Workspace, Play Store download (`AuthActions`)
- Swap hero via `public/hero.png`
