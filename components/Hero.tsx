'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerParent } from '@/lib/animations';

interface Props {
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineGradient: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export function Hero({ hero }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Pastel mesh background */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="hero-mesh-bottom" />
      </div>

      <div className="mx-auto max-w-content px-6 pt-36 md:pt-44 pb-24 md:pb-36 text-center">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7 md:gap-9"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-[13px] font-semibold uppercase tracking-eyebrow text-accent-1"
          >
            {hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-bold tracking-tightish text-fg leading-[1.05] text-[clamp(44px,7.5vw,96px)]"
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
            <a
              href="/store"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-grad text-white h-11 px-5 text-[15px] font-medium shadow-pill hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(124,58,237,0.28)] transition-all duration-200"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="/orders"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white border border-border text-fg h-11 px-5 text-[15px] font-medium hover:border-accent-1 hover:text-accent-1 transition-colors"
            >
              {hero.secondaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
