'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Palette,
  ShoppingBag,
  Image as ImageIcon,
  Megaphone,
  Youtube,
  Grid3x3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeUp, staggerParent, inViewOnce } from '@/lib/animations';
import type { DesignServiceCard, DesignServiceKey } from '@/content/types';
import { products } from '@/content/products';

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: DesignServiceCard[];
    seeAll: string;
  };
  fromPrefix: string;
}

const ICON_MAP: Record<DesignServiceKey, LucideIcon> = {
  logo: Palette,
  'shop-banner': ShoppingBag,
  thumbnail: ImageIcon,
  'display-banner': Megaphone,
  'youtube-banner': Youtube,
  icons: Grid3x3,
};

/* Each card gets its own subtle gradient — keeps the grid lively without
   overpowering the rest of the page. */
const CARD_THEME: Record<DesignServiceKey, { from: string; to: string }> = {
  logo: { from: '#A78BFA', to: '#7C3AED' },
  'shop-banner': { from: '#F472B6', to: '#EC4899' },
  thumbnail: { from: '#60A5FA', to: '#2563EB' },
  'display-banner': { from: '#34D399', to: '#0D9488' },
  'youtube-banner': { from: '#F87171', to: '#DC2626' },
  icons: { from: '#FBBF24', to: '#F97316' },
};

const SERVICE_TO_SLUG: Record<DesignServiceKey, string | undefined> = {
  logo: products.find((p) => p.service === 'logo')?.slug,
  'shop-banner': products.find((p) => p.service === 'shop-banner')?.slug,
  thumbnail: products.find((p) => p.service === 'thumbnail')?.slug,
  'display-banner': products.find((p) => p.service === 'display-banner')?.slug,
  'youtube-banner': products.find((p) => p.service === 'youtube-banner')?.slug,
  icons: products.find((p) => p.service === 'icons')?.slug,
};

export function DesignServices({ data, fromPrefix }: Props) {
  return (
    <section className="relative bg-bg-soft/60">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-[13px] font-semibold uppercase tracking-eyebrow text-accent-1 mb-4"
          >
            {data.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-bold text-fg tracking-tightish text-[clamp(32px,4vw,56px)] leading-[1.1]"
          >
            {data.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-prose60 text-fg-body leading-7"
          >
            {data.sub}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.items.map((item) => {
            const Icon = ICON_MAP[item.key];
            const theme = CARD_THEME[item.key];
            const slug = SERVICE_TO_SLUG[item.key];

            return (
              <motion.div key={item.key} variants={fadeUp}>
                <Link
                  href={slug ? `/store/${slug}` : '/store?cat=design'}
                  className="group relative block h-full overflow-hidden rounded-3xl glass-strong glass-hover-ring p-7 md:p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Decorative gradient orb */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-60 blur-3xl group-hover:opacity-90 transition-opacity duration-500"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${theme.from} 0%, ${theme.to}33 70%, transparent 100%)`,
                    }}
                  />

                  <div
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.25)] mb-6"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
                    }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="relative text-lg md:text-xl font-semibold text-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="relative text-[14.5px] leading-7 text-fg-body mb-6">
                    {item.desc}
                  </p>

                  <div className="relative flex items-end justify-between">
                    <div>
                      <p className="text-[12px] uppercase tracking-eyebrow text-fg-muted">
                        {fromPrefix} {item.cta}
                      </p>
                      <p className="text-2xl font-bold tracking-tightish text-fg mt-1">
                        {item.currency}
                        {item.fromPrice.toLocaleString('en-US')}
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-border text-fg group-hover:bg-accent-grad group-hover:border-transparent group-hover:text-white transition-all duration-300">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-10 text-center"
        >
          <Link
            href="/store?cat=design"
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-accent-1 hover:text-accent-2 transition-colors"
          >
            {data.seeAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
