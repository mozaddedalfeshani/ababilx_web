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
├── src/components/home/
│   ├── hero/                     # whole landing viewport: header + hero + facts row
│   │   └── styles/               # vx-* CSS (base, header, buttons, hero, motion, responsive)
│   └── shared/                   # locale
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
- Hardcoded light theme, except the home page: black single viewport (`.vx`, `body:has(.vx)`), Inter + Instrument Serif via next/font, CloudFront video backdrop (`HERO_VIDEO` in `hero-landing.tsx`)
- Auth / outbound links: `NEXT_PUBLIC_API_URL` (default `https://api.ababilx.com`) + `/auth/google`; Paper / Workspace / Play Store URLs in `src/lib/seo.ts`
- Header: logo + Play Store button only (no nav). Hero CTAs: Play Store download, web chat (`WEB_CHAT_URL` = chat.ababilx.com, QR sign-in hint under the buttons), Workspace. Copy (EN/BN) in `src/constant/home/copy.ts`
- Bangla: `.vx[lang=bn]` zeroes letter-spacing and drops the Latin serif italic
