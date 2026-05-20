'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GameBadge, GAME_BRANDS, GAME_KEYS } from '@/components/brand-logos';
import { fadeUp, staggerParent, inViewOnce } from '@/lib/animations';
import { products } from '@/content/products';
import type { GameKey } from '@/content/types';

interface Props {
  data: { eyebrow: string; heading: string; sub: string; seeAll: string };
  fromPrefix: string;
  currency: string;
}

/* Map every game key → its top-up product slug */
const GAME_TO_SLUG: Record<GameKey, string | undefined> = GAME_KEYS.reduce(
  (acc, k) => {
    acc[k] = products.find((p) => p.brand === k)?.slug;
    return acc;
  },
  {} as Record<GameKey, string | undefined>
);

export function GameShowcase({ data, fromPrefix, currency }: Props) {
  return (
    <section className="relative">
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

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-5"
        >
          {GAME_KEYS.map((key) => {
            const brand = GAME_BRANDS[key];
            const slug = GAME_TO_SLUG[key];
            const lowestPrice = products.find((p) => p.brand === key)?.fromPrice;

            return (
              <motion.li key={key} variants={fadeUp} className="h-full">
                <Link
                  href={slug ? `/store/${slug}` : '/store'}
                  className="group relative h-full flex flex-col items-center text-center gap-3 p-5 md:p-6 rounded-2xl glass glass-hover-ring transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Holographic sheen */}
                  <span
                    aria-hidden="true"
                    className="holo-sheen absolute inset-0 opacity-50 group-hover:opacity-90 transition-opacity duration-500"
                  />

                  {/* Brand badge */}
                  <span className="relative z-10">
                    <GameBadge brand={key} size={56} rounded="2xl" />
                  </span>

                  {/* Name */}
                  <span className="relative z-10 text-[14px] md:text-[15px] font-semibold text-fg leading-tight">
                    {brand.name}
                  </span>

                  {/* Price */}
                  {lowestPrice && (
                    <span className="relative z-10 text-[12px] text-fg-muted">
                      {fromPrefix} {currency}
                      {lowestPrice.toLocaleString('en-US')}
                    </span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-10 text-center"
        >
          <Link
            href="/store?cat=games"
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
