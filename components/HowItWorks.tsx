'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerParent, inViewOnce } from '@/lib/animations';
import type { HowStep } from '@/content/types';

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    sub: string;
    steps: HowStep[];
  };
}

export function HowItWorks({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="text-center mb-14 md:mb-20"
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
            className="mt-5 max-w-prose60 mx-auto text-fg-body leading-7"
          >
            {data.sub}
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Dotted connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[16%] right-[16%] top-12 h-0.5 dotted-connector"
          />

          <motion.ol
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
            className="relative grid gap-12 md:gap-8 md:grid-cols-3"
          >
            {data.steps.map((step) => (
              <motion.li
                key={step.num}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center md:px-4"
              >
                <div className="relative mb-6 grid h-24 w-24 place-items-center rounded-full bg-white border border-border shadow-card">
                  <span className="text-grad font-bold text-3xl tracking-tightish">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-fg mb-2">
                  {step.title}
                </h3>
                <p className="max-w-xs text-[15px] leading-7 text-fg-body">
                  {step.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
