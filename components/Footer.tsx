import Link from 'next/link';
import { XfeinMark } from '@/components/brand-logos';
import type { FooterColumn } from '@/content/types';

interface Props {
  brand: string;
  data: {
    tagline: string;
    columns: FooterColumn[];
    copyright: string;
  };
}

export function Footer({ brand, data }: Props) {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <XfeinMark className="h-7 w-7" />
              <span className="text-base font-bold text-fg tracking-tightish">
                {brand}
              </span>
            </div>
            <p className="text-[14px] leading-6 text-fg-body max-w-xs">
              {data.tagline}
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {data.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[13px] font-semibold uppercase tracking-eyebrow text-fg-muted mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-fg-body hover:text-accent-1 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-[13px] text-fg-muted">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
