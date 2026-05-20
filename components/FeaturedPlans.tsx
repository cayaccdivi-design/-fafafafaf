'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logos';
import { fadeUp, staggerParent, inViewOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Plan } from '@/content/types';

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: Plan[];
  };
}

export function FeaturedPlans({ data }: Props) {
  return (
    <section className="relative bg-bg-soft/60">
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

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="grid gap-6 md:grid-cols-3 items-stretch"
        >
          {data.items.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'relative flex flex-col rounded-2xl bg-white p-7 md:p-8 transition-all duration-200',
        plan.popular
          ? 'shadow-card-hover ring-1 ring-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#7C3AED,#2563EB)_border-box] border border-transparent md:scale-[1.02]'
          : 'border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5'
      )}
    >
      {plan.popular && plan.popularLabel && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-grad text-white text-xs font-semibold px-3 py-1 shadow-pill">
          {plan.popularLabel}
        </span>
      )}

      <div className="flex items-center gap-3 mb-5">
        <span
          className={cn(
            'grid h-10 w-10 place-items-center rounded-xl',
            plan.popular
              ? 'bg-accent-grad text-white'
              : 'bg-bg-soft text-accent-1'
          )}
        >
          <BrandLogo brand={plan.brand} className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold text-fg">{plan.name}</h3>
      </div>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-fg-muted text-lg">{plan.currency}</span>
        <span className="text-5xl font-bold text-fg tracking-tightish">
          {plan.price}
        </span>
        <span className="text-fg-muted text-sm ml-1">{plan.period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-[15px] text-fg-body leading-6"
          >
            <Check
              className="h-5 w-5 shrink-0 text-accent-1 mt-0.5"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="/store"
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-full h-11 px-5 text-[15px] font-medium transition-all duration-200',
          plan.popular
            ? 'bg-accent-grad text-white shadow-pill hover:-translate-y-0.5'
            : 'bg-white border border-border text-fg hover:border-accent-1 hover:text-accent-1'
        )}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </motion.div>
  );
}
