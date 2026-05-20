'use client';

import { useMemo, useState } from 'react';
import {
  useSearchParams,
  useRouter,
  usePathname,
} from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Gamepad2, Palette, LayoutGrid, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { fadeUp, staggerParent, inViewOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Product, ProductCategory, SiteContent } from '@/content/types';

type SortKey = 'newest' | 'popular' | 'price-asc' | 'price-desc';
type Filter = 'all' | ProductCategory;

interface Props {
  products: Product[];
  strings: SiteContent['store'];
}

const TAB_ICONS: Record<Filter, LucideIcon> = {
  all: LayoutGrid,
  games: Gamepad2,
  design: Palette,
};

export function StoreGrid({ products, strings }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialCat = (searchParams?.get('cat') as Filter) || 'all';

  const [filter, setFilter] = useState<Filter>(initialCat);
  const [sort, setSort] = useState<SortKey>('popular');
  const [query, setQuery] = useState('');

  const tabs: { key: Filter; label: string }[] = [
    { key: 'all', label: strings.categoryAll },
    { key: 'games', label: strings.categoryGames },
    { key: 'design', label: strings.categoryDesign },
  ];

  const counts = useMemo(
    () => ({
      all: products.length,
      games: products.filter((p) => p.category === 'games').length,
      design: products.filter((p) => p.category === 'design').length,
    }),
    [products],
  );

  const filtered = useMemo(() => {
    // 1) category filter
    let base =
      filter === 'all'
        ? products
        : products.filter((p) => p.category === filter);

    // 2) search filter — name + tagline + brand
    const q = query.trim().toLowerCase();
    if (q) {
      base = base.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          (p.brand ?? '').toLowerCase().includes(q) ||
          (p.service ?? '').toLowerCase().includes(q),
      );
    }

    // 3) sort
    const popularRank = (p: Product) =>
      (p.badges.includes('popular') ? 0 : 1) +
      (p.badges.includes('new') ? 0 : 0.1);

    switch (sort) {
      case 'newest':
        return [...base].sort(
          (a, b) =>
            (a.badges.includes('new') ? 0 : 1) -
            (b.badges.includes('new') ? 0 : 1),
        );
      case 'price-asc':
        return [...base].sort((a, b) => a.fromPrice - b.fromPrice);
      case 'price-desc':
        return [...base].sort((a, b) => b.fromPrice - a.fromPrice);
      case 'popular':
      default:
        return [...base].sort((a, b) => popularRank(a) - popularRank(b));
    }
  }, [filter, sort, query, products]);

  const onTab = (key: Filter) => {
    setFilter(key);
    const params = new URLSearchParams(searchParams?.toString());
    if (key === 'all') params.delete('cat');
    else params.set('cat', key);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-content px-6 pb-24 md:pb-32">
        {/* === Mobile / tablet — horizontal sticky toolbar === */}
        <div className="lg:hidden sticky top-24 z-30 mb-6">
          <div className="rounded-3xl glass-strong shadow-card p-3">
            <SearchInput value={query} onChange={setQuery} />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <div role="tablist" className="flex flex-wrap gap-1.5">
                {tabs.map((t) => {
                  const active = filter === t.key;
                  const Icon = TAB_ICONS[t.key];
                  return (
                    <button
                      key={t.key}
                      role="tab"
                      aria-selected={active}
                      onClick={() => onTab(t.key)}
                      className={cn(
                        'inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[13px] font-medium transition-all',
                        active
                          ? 'bg-accent-grad text-white shadow-pill'
                          : 'border border-border bg-white text-fg hover:border-accent-1 hover:text-accent-1',
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.label}
                    </button>
                  );
                })}
              </div>
              <SortSelect value={sort} onChange={setSort} strings={strings} />
            </div>
          </div>
        </div>

        {/* === Desktop layout — sidebar + grid === */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* ---------- Sidebar ---------- */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 rounded-3xl glass-strong shadow-card p-5">
              {/* Short search bar */}
              <SearchInput value={query} onChange={setQuery} />

              {/* Categories */}
              <h3 className="mt-6 mb-3 text-[11px] font-semibold uppercase tracking-eyebrow text-fg-muted">
                Categories
              </h3>
              <ul role="tablist" className="flex flex-col gap-2">
                {tabs.map((t) => {
                  const active = filter === t.key;
                  const Icon = TAB_ICONS[t.key];
                  return (
                    <li key={t.key}>
                      <button
                        role="tab"
                        aria-selected={active}
                        onClick={() => onTab(t.key)}
                        className={cn(
                          'group w-full inline-flex items-center justify-between gap-2 h-11 px-4 rounded-2xl text-[14px] font-medium transition-all',
                          active
                            ? 'bg-accent-grad text-white shadow-pill border border-transparent'
                            : 'border border-border bg-white text-fg hover:border-accent-1 hover:text-accent-1',
                        )}
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon
                            className={cn(
                              'h-4 w-4 transition-colors',
                              active ? 'text-white' : 'text-accent-1',
                            )}
                            aria-hidden="true"
                          />
                          {t.label}
                        </span>
                        <span
                          className={cn(
                            'inline-flex items-center justify-center min-w-[1.5rem] h-5 px-1.5 rounded-full text-[11px] font-semibold transition-colors',
                            active
                              ? 'bg-white/25 text-white'
                              : 'bg-bg-soft text-fg-muted group-hover:bg-violet-50 group-hover:text-accent-1',
                          )}
                        >
                          {counts[t.key]}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Sort */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-eyebrow text-fg-muted">
                  {strings.sortLabel}
                </h3>
                <SortSelect
                  value={sort}
                  onChange={setSort}
                  strings={strings}
                  fullWidth
                />
              </div>

              {/* Result counter */}
              <p className="mt-6 text-[12.5px] text-fg-muted">
                Showing{' '}
                <span className="font-semibold text-fg">{filtered.length}</span>{' '}
                of {products.length}
              </p>
            </div>
          </aside>

          {/* ---------- Grid ---------- */}
          <div className="lg:col-span-9">
            {filtered.length === 0 ? (
              <EmptyState
                onClear={() => {
                  setQuery('');
                  onTab('all');
                }}
              />
            ) : (
              <motion.div
                key={`${filter}-${sort}-${query}`}
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={inViewOnce}
                className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
              >
                {filtered.map((product) => (
                  <motion.div key={product.slug} variants={fadeUp}>
                    <ProductCard product={product} strings={strings} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="relative flex items-center">
      <Search
        className="absolute left-3.5 h-4 w-4 text-fg-muted pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search…"
        aria-label="Search products"
        className="w-full h-10 pl-10 pr-9 rounded-full bg-white border border-border text-[14px] text-fg placeholder:text-fg-muted focus:outline-none focus:border-accent-1 focus:ring-2 focus:ring-accent-1/20 transition"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-2 inline-flex items-center justify-center h-7 w-7 rounded-full text-fg-muted hover:bg-bg-soft hover:text-fg transition-colors"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      )}
    </label>
  );
}

function SortSelect({
  value,
  onChange,
  strings,
  fullWidth = false,
}: {
  value: SortKey;
  onChange: (s: SortKey) => void;
  strings: SiteContent['store'];
  fullWidth?: boolean;
}) {
  return (
    <label
      className={cn(
        'flex items-center gap-2 text-[13px] text-fg-body',
        fullWidth && 'w-full',
      )}
    >
      {!fullWidth && (
        <span className="uppercase tracking-eyebrow text-fg-muted">
          {strings.sortLabel}
        </span>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className={cn(
          'h-10 px-3 rounded-full bg-white border border-border text-fg text-[13px] focus:outline-none focus:border-accent-1 focus:ring-2 focus:ring-accent-1/20 transition cursor-pointer',
          fullWidth && 'w-full',
        )}
      >
        <option value="popular">{strings.sortPopular}</option>
        <option value="newest">{strings.sortNewest}</option>
        <option value="price-asc">{strings.sortPriceAsc}</option>
        <option value="price-desc">{strings.sortPriceDesc}</option>
      </select>
    </label>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="rounded-3xl glass-strong p-10 md:p-16 text-center">
      <div className="mx-auto h-12 w-12 grid place-items-center rounded-2xl bg-bg-soft text-fg-muted mb-5">
        <Search className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-fg mb-2">No matches</h3>
      <p className="text-fg-body max-w-sm mx-auto">
        Try a different keyword, or clear the filters to see every product.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 inline-flex items-center justify-center h-10 px-5 rounded-full bg-accent-grad text-white text-[14px] font-medium shadow-pill hover:-translate-y-0.5 transition-transform"
      >
        Clear filters
      </button>
    </div>
  );
}
