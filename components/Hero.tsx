'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, BadgeCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeUp, staggerParent } from '@/lib/animations';

interface Props {
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineGradient: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
  };
}

const BADGE_ICONS: LucideIcon[] = [BadgeCheck, Zap, Sparkles];

export function Hero({ hero }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Pastel mesh background */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="hero-mesh-bottom" />
      </div>

      <div className="mx-auto max-w-content px-6 pt-36 md:pt-44 pb-20 md:pb-28 text-center">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7 md:gap-9"
        >
          {/* Eyebrow pill — glass */}
          <motion.div
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 h-9 text-[12.5px] font-medium tracking-eyebrow uppercase text-accent-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent-1 opacity-70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-1" />
            </span>
            {hero.eyebrow}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-bold tracking-tightish text-fg leading-[1.05] text-[clamp(40px,7vw,92px)]"
          >
            <span className="block">{hero.headlineLine1}</span>
            <span className="block text-grad-shimmer">
              {hero.headlineGradient}
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="max-w-prose60 text-[15px] md:text-base leading-7 md:leading-8 text-fg-body"
          >
            {hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2"
          >
            <Link
              href="/store"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-grad text-white h-12 px-6 text-[15px] font-medium shadow-pill hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(124,58,237,0.28)] transition-all duration-200"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/orders"
              className="group inline-flex items-center justify-center gap-2 rounded-full glass-strong text-fg h-12 px-6 text-[15px] font-medium hover:text-accent-1 transition-colors"
            >
              {hero.secondaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Trust badges — glass row */}
          <motion.ul
            variants={fadeUp}
            className="mt-2 flex flex-wrap justify-center gap-2.5"
          >
            {hero.badges.map((label, i) => {
              const Icon = BADGE_ICONS[i % BADGE_ICONS.length];
              return (
                <li
                  key={label}
                  className="glass inline-flex items-center gap-2 rounded-full px-3.5 h-8 text-[13px] font-medium text-fg-body"
                >
                  <Icon className="h-3.5 w-3.5 text-accent-1" aria-hidden="true" />
                  {label}
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
