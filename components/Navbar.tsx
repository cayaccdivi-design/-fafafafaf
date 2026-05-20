'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Store } from 'lucide-react';
import { ElevenAiMark } from '@/components/brand-logos';
import { navSpringIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Props {
  brand: string;
  nav: { home: string; store: string };
}

export function Navbar({ brand, nav }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<'home' | 'store'>('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 md:top-5 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        variants={navSpringIn}
        initial="hidden"
        animate="show"
        aria-label="Primary"
        className={cn(
          'pointer-events-auto flex items-center gap-1.5 rounded-full border border-border bg-white/80 p-1.5 transition-all duration-300',
          scrolled
            ? 'shadow-card-hover backdrop-blur-md scale-[0.97]'
            : 'shadow-card backdrop-blur-sm'
        )}
      >
        {/* Wordmark */}
        <a
          href="/"
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-bg-soft transition-colors"
          aria-label={`${brand} home`}
        >
          <ElevenAiMark className="h-6 w-6" />
          <span className="text-[15px] font-bold tracking-tightish text-accent-1">
            {brand}
          </span>
        </a>

        {/* Active pill */}
        <button
          type="button"
          onClick={() => setActive('home')}
          className={cn(
            'flex items-center gap-1.5 rounded-full text-[14px] font-medium px-4 h-9 transition-all',
            active === 'home'
              ? 'bg-accent-grad text-white shadow-pill'
              : 'text-fg hover:bg-bg-soft'
          )}
          aria-current={active === 'home' ? 'page' : undefined}
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          {nav.home}
        </button>

        {/* Inactive pill */}
        <button
          type="button"
          onClick={() => setActive('store')}
          className={cn(
            'flex items-center gap-1.5 rounded-full text-[14px] font-medium px-4 h-9 transition-all',
            active === 'store'
              ? 'bg-accent-grad text-white shadow-pill'
              : 'text-fg hover:bg-bg-soft'
          )}
          aria-current={active === 'store' ? 'page' : undefined}
        >
          <Store className="h-4 w-4" aria-hidden="true" />
          {nav.store}
        </button>
      </motion.nav>
    </header>
  );
}
