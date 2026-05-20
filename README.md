# 11AI Clone

A pixel-faithful clone of [11aix.com](https://11aix.com/) — a clean, premium,
light-mode landing page for an AI membership reseller hub.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS 3.4** with a full custom design-token layer
- **Framer Motion** for fade-up + stagger entrance animations
- **next-intl** for i18n with `zh` (default) and `en` locales
- **Radix UI Accordion** for the FAQ
- **Lucide React** icons
- Inline custom SVG brand glyphs (Sora, ChatGPT, Claude, Gemini, Grok, Kiro, Jimeng)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000  (defaults to /zh)
npm run build    # production build, statically generates /zh and /en
npm run start
```

## Routes

- `/` → redirects to `/zh` (default locale)
- `/zh` — Simplified Chinese (default copy)
- `/en` — English

## Project layout

```
app/
  [locale]/
    layout.tsx       # html, body, NextIntlClientProvider
    page.tsx         # composes all sections
    not-found.tsx
  globals.css        # design tokens, hero pastel mesh, gradient text, marquee mask
  favicon.svg
components/
  Navbar.tsx
  Hero.tsx
  LogoMarquee.tsx
  ServiceCommitment.tsx
  HowItWorks.tsx
  FeaturedPlans.tsx
  FAQ.tsx
  CTABanner.tsx
  Footer.tsx
  brand-logos/index.tsx
  ui/accordion.tsx
content/
  site.zh.ts         # all zh-CN copy
  site.en.ts         # all en-US copy
  types.ts
  index.ts
i18n/
  routing.ts         # locales, defaultLocale
  request.ts
messages/
  zh.json            # Meta + A11y namespaces
  en.json
lib/
  animations.ts
  utils.ts
middleware.ts
tailwind.config.ts
```

## Design notes

- **Light mode only.** Background is white with a soft pastel mesh
  (lavender / sky-blue / pink) blurred behind the hero.
- **Accent gradient** `#7C3AED → #2563EB` is used on the headline word
  "AI 会员", on primary CTAs, and on the bottom CTA banner.
- **Floating pill navbar** centered at the top, shrinks slightly on scroll.
- **Marquee** of supported AI services with edge mask-fade,
  pauses on hover, respects `prefers-reduced-motion`.
- **Typography**: Inter + Noto Sans SC fallback chain (system fonts in
  the sandbox build; production deployments will load the web fonts).
