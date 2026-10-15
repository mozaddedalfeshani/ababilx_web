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
- Naming: **AbabilX** is the company; **AbabilX Chat** (E2EE messenger: Android app + Chat Web at chat.ababilx.com) and **AbabilX Workspace** are its services (`CHAT_NAME` / `WORKSPACE_NAME` in `src/lib/seo.ts`). SEO text constants live in `seo.ts`; JSON-LD (Organization with both services as brands, Chat as MobileApplication + WebApplication) in `seo-schema.ts` — import it directly, never re-export it from `seo.ts` (circular import → TDZ build error)
- Auth / outbound links: `NEXT_PUBLIC_API_URL` (default `https://api.ababilx.com`) + `/auth/google`; Paper / Workspace / Play Store URLs in `src/lib/seo.ts`
- Header: logo + Play Store button only (no nav). Hero is about AbabilX Chat (the E2EE messenger; AbabilX is the company). Hero CTAs: Download for Android, AbabilX Chat Web (`WEB_CHAT_URL` = chat.ababilx.com, QR sign-in hint under the buttons), AbabilX Workspace. Copy (EN/BN) in `src/constant/home/copy.ts`
- Bangla: `.vx[lang=bn]` zeroes letter-spacing and drops the Latin serif italic
