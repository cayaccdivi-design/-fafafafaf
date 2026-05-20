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
}

/* slug lookup so each tile deep-links to its product page */
const GAME_TO_SLUG: Record<GameKey, string | undefined> = GAME_KEYS.reduce(
  (acc, k) => {
    acc[k] = products.find((p) => p.brand === k)?.slug;
    return acc;
  },
  {} as Record<GameKey, string | undefined>,
);

export function GameShowcase({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="flex flex-col items-center text-center mb-14 md:mb-20"
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

        {/* Plain icon-and-name grid — no card chrome, no price */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-x-4 gap-y-8 md:gap-y-10"
        >
          {GAME_KEYS.map((key) => {
            const brand = GAME_BRANDS[key];
            const slug = GAME_TO_SLUG[key];

            return (
              <motion.li key={key} variants={fadeUp}>
                <Link
                  href={slug ? `/store/${slug}` : '/store?cat=games'}
                  className="group flex flex-col items-center text-center gap-3 outline-none"
                  aria-label={brand.name}
                >
                  <span className="relative inline-flex transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                    {/* Soft glow that wakes up on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 group-focus-visible:opacity-60 transition-opacity duration-300"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brand.from} 0%, ${brand.to} 100%)`,
                      }}
                    />
                    <GameBadge
                      brand={key}
                      size={72}
                      rounded="2xl"
                      className="relative"
                    />
                  </span>
                  <span className="text-[13px] md:text-[14px] font-semibold text-fg leading-tight">
                    {brand.name}
                  </span>
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
          className="mt-14 text-center"
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
