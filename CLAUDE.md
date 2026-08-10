# AbabilX Main (Next.js)

Landing shell for AbabilX. Most UI comes from **shadcn** (`src/components/ui`); feature pieces live under `src/components/*`.

## Structure

```
ababilx_main/
├── public/hero.png + logo.png
├── src/app/page.tsx              # → HomePageClient
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
pnpm dev
pnpm lint
pnpm build
```

## Notes

- Package manager: **pnpm**
- Hardcoded light theme
- Auth: `NEXT_PUBLIC_API_URL` (default `https://api.ababilx.cloud`) + `/auth/google`
- Swap hero via `public/hero.png`
