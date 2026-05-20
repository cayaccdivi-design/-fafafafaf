import type { CSSProperties, SVGProps } from 'react';

/* ============================================================
   xfein wordmark / logomark
   ------------------------------------------------------------
   A refined gradient squircle with a stylised "x" — rounded
   stroke caps, a soft top sheen for depth, and a subtle violet
   tint shift in the gradient for a more "designed" feel.
   ============================================================ */
export function XfeinMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="xfein-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="55%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="xfein-sheen" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* base squircle */}
      <rect x="2" y="2" width="20" height="20" rx="6.5" fill="url(#xfein-base)" />

      {/* top sheen — gives depth without being noisy */}
      <path
        d="M4.5 4 Q12 3 19.5 4 L19.5 10 Q12 8.5 4.5 10 Z"
        fill="url(#xfein-sheen)"
      />

      {/* stylised X — two rounded crossing strokes */}
      <path
        d="M8.4 8.4 L15.6 15.6"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M15.6 8.4 L8.4 15.6"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* subtle inner shadow on the bottom edge */}
      <path
        d="M3 18.5 Q12 21 21 18.5"
        stroke="#000000"
        strokeOpacity="0.08"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

/* ============================================================
   Game brand registry — colors + monogram glyphs
   ============================================================ */
export type GameKey =
  | 'roblox'
  | 'lienquan'
  | 'freefire'
  | 'playtogether'
  | 'lol'
  | 'fifa'
  | 'genshin';

export interface GameBrand {
  name: string;
  /** Background gradient stops for the GameBadge */
  from: string;
  to: string;
  /** Inline glyph rendered on top of the gradient */
  glyph: (p: SVGProps<SVGSVGElement>) => JSX.Element;
}

const baseSvg = {
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
} as const;

/* --- Stylised game glyphs ------------------------------------------------
   Convention: the parent GameBadge sets `text-white` so any path using
   `currentColor` paints white on top of the brand gradient.
   Inner darker accents use rgba(0,0,0,0.X), lighter ones use white opacity.
   --------------------------------------------------------------------- */

/** Roblox — tilted Roblox-style cube with a notch cut out of one face */
function RobloxGlyph(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...p}>
      <g transform="rotate(8 12 12)">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2.4"
          fill="currentColor"
        />
        <rect
          x="11"
          y="11"
          width="5"
          height="5"
          rx="0.8"
          fill="rgba(0,0,0,0.32)"
        />
      </g>
    </svg>
  );
}

/** Liên Quân (Arena of Valor) — hexagonal shield with a crisp V crest */
function LienQuanGlyph(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...p}>
      <path
        d="M12 2.5 L20.5 6.5 V13.5 C20.5 17.5 17 19.8 12 21.5 C7 19.8 3.5 17.5 3.5 13.5 V6.5 Z"
        fill="currentColor"
      />
      {/* V crest cut out via a darker overlay */}
      <path
        d="M8 9.2 L12 16.5 L16 9.2 L13.8 9.2 L12 13 L10.2 9.2 Z"
        fill="rgba(0,0,0,0.32)"
      />
      {/* small accent dot */}
      <circle cx="12" cy="6.6" r="0.9" fill="rgba(255,255,255,0.85)" />
    </svg>
  );
}

/** Free Fire — layered flame with inner highlight */
function FreeFireGlyph(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...p}>
      <path
        d="M12 2.4 C 13.6 5.6, 16.6 6.8, 16.6 10.8 C 16.6 15.4, 14 18.4, 12 19.8 C 10 18.4, 7.4 15.4, 7.4 10.8 C 7.4 6.8, 10.4 5.6, 12 2.4 Z"
        fill="currentColor"
      />
      <path
        d="M12 8.4 C 13.1 10.4, 14.1 11.4, 14.1 13.4 C 14.1 15.6, 13.1 17, 12 17.4 C 10.9 17, 9.9 15.6, 9.9 13.4 C 9.9 11.4, 10.9 10.4, 12 8.4 Z"
        fill="rgba(255,255,255,0.45)"
      />
    </svg>
  );
}

/** Play Together — cheerful round face + small twinkle */
function PlayTogetherGlyph(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...p}>
      <circle cx="12" cy="12.5" r="8.6" fill="currentColor" />
      <circle cx="9.1" cy="11" r="1.15" fill="rgba(0,0,0,0.55)" />
      <circle cx="14.9" cy="11" r="1.15" fill="rgba(0,0,0,0.55)" />
      <path
        d="M8.6 14.5 Q12 17.6 15.4 14.5"
        stroke="rgba(0,0,0,0.55)"
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
      {/* twinkle */}
      <path
        d="M5 5 L5.6 6.4 L7 7 L5.6 7.6 L5 9 L4.4 7.6 L3 7 L4.4 6.4 Z"
        fill="rgba(255,255,255,0.95)"
      />
    </svg>
  );
}

/** League of Legends — five-spike crown with a centre jewel */
function LolGlyph(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...p}>
      <path
        d="M3.5 8.5 L7 12.6 L9 6.5 L12 12.6 L15 6.5 L17 12.6 L20.5 8.5 L18.6 18.6 H5.4 Z"
        fill="currentColor"
      />
      {/* base bar shading */}
      <rect
        x="5.6"
        y="16.4"
        width="12.8"
        height="2.2"
        fill="rgba(0,0,0,0.22)"
      />
      <circle cx="12" cy="13.4" r="1.4" fill="rgba(255,255,255,0.95)" />
    </svg>
  );
}

/** FIFA — soccer ball with the classic hexagon / pentagon pattern */
function FifaGlyph(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...p}>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      {/* central pentagon */}
      <path
        d="M12 7.4 L14.7 9.4 L13.65 12.6 L10.35 12.6 L9.3 9.4 Z"
        fill="rgba(0,0,0,0.55)"
      />
      {/* connector seams */}
      <path
        d="M12 7.4 V3.2 M14.7 9.4 L18.6 8 M13.65 12.6 L16.2 16.4 M10.35 12.6 L7.8 16.4 M9.3 9.4 L5.4 8"
        stroke="rgba(0,0,0,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* outer ring darker */}
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="rgba(0,0,0,0.18)"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Genshin Impact — anemo / four-pointed wind glyph with a soft eye */
function GenshinGlyph(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvg} {...p}>
      <path
        d="M12 2.4 C 14.2 8, 16 9.8, 21.6 12 C 16 14.2, 14.2 16, 12 21.6 C 9.8 16, 8 14.2, 2.4 12 C 8 9.8, 9.8 8, 12 2.4 Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="2.2" fill="rgba(0,0,0,0.28)" />
      <circle cx="12" cy="12" r="0.9" fill="rgba(255,255,255,0.95)" />
    </svg>
  );
}

/* --- Brand registry -- */
export const GAME_BRANDS: Record<GameKey, GameBrand> = {
  roblox: { name: 'Roblox', from: '#FF4D4D', to: '#FF7A00', glyph: RobloxGlyph },
  lienquan: {
    name: 'Liên Quân',
    from: '#F59E0B',
    to: '#B45309',
    glyph: LienQuanGlyph,
  },
  freefire: {
    name: 'Free Fire',
    from: '#EF4444',
    to: '#EC4899',
    glyph: FreeFireGlyph,
  },
  playtogether: {
    name: 'Play TGT',
    from: '#06B6D4',
    to: '#3B82F6',
    glyph: PlayTogetherGlyph,
  },
  lol: {
    name: 'League of Legends',
    from: '#A855F7',
    to: '#0EA5E9',
    glyph: LolGlyph,
  },
  fifa: { name: 'FIFA', from: '#22C55E', to: '#0D9488', glyph: FifaGlyph },
  genshin: {
    name: 'Genshin',
    from: '#A78BFA',
    to: '#F472B6',
    glyph: GenshinGlyph,
  },
};

export const GAME_KEYS = Object.keys(GAME_BRANDS) as GameKey[];

/* ============================================================
   GameBadge — gradient square with the brand monogram.
   The single source of truth for "this game's icon block".
   ============================================================ */
interface GameBadgeProps {
  brand: GameKey;
  size?: number;
  rounded?: 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  style?: CSSProperties;
}

const ROUND_MAP: Record<NonNullable<GameBadgeProps['rounded']>, string> = {
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

export function GameBadge({
  brand,
  size = 40,
  rounded = '2xl',
  className = '',
  style,
}: GameBadgeProps) {
  const b = GAME_BRANDS[brand];
  const Glyph = b.glyph;
  const glyphSize = Math.round(size * 0.58);

  return (
    <span
      className={`inline-flex items-center justify-center text-white shadow-[0_8px_22px_-8px_rgba(0,0,0,0.35)] ${ROUND_MAP[rounded]} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `linear-gradient(135deg, ${b.from} 0%, ${b.to} 100%)`,
        ...style,
      }}
      aria-label={b.name}
    >
      <Glyph width={glyphSize} height={glyphSize} />
    </span>
  );
}
