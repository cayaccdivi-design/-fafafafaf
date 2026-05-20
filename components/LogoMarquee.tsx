import { BrandLogo } from '@/components/brand-logos';
import type { BrandKey } from '@/content/types';
import { cn } from '@/lib/utils';

interface Props {
  marquee: { caption: string; brands: string[] };
  ariaLabel: string;
}

const NAME_TO_KEY: Record<string, BrandKey> = {
  Sora: 'sora',
  Kiro: 'kiro',
  Jimeng: 'jimeng',
  ChatGPT: 'chatgpt',
  Claude: 'claude',
  Gemini: 'gemini',
  Grok: 'grok',
};

export function LogoMarquee({ marquee, ariaLabel }: Props) {
  // Duplicate the list once so the marquee can loop seamlessly with -50% translate
  const items = [...marquee.brands, ...marquee.brands];

  return (
    <section
      className="relative pt-2 pb-24 md:pb-32"
      aria-labelledby="marquee-caption"
    >
      <p
        id="marquee-caption"
        className="text-center text-xs md:text-[13px] font-medium text-fg-muted mb-8"
      >
        {marquee.caption}
      </p>

      <div className="marquee-mask relative overflow-hidden">
        <ul
          aria-label={ariaLabel}
          className="flex w-max animate-marquee gap-16 whitespace-nowrap py-2 hover:[animation-play-state:paused]"
        >
          {items.map((name, i) => {
            const key = NAME_TO_KEY[name];
            return (
              <li
                key={`${name}-${i}`}
                className={cn(
                  'flex items-center gap-2 text-fg-muted opacity-60 hover:opacity-100 hover:text-accent-1 transition-all duration-300'
                )}
                aria-hidden={i >= marquee.brands.length ? 'true' : undefined}
              >
                {key && <BrandLogo brand={key} className="h-5 w-5" />}
                <span className="text-[15px] font-medium">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
