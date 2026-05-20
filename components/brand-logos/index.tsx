import type { SVGProps } from 'react';
import type { BrandKey } from '@/content/types';

type Props = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
} as const;

/* Stylised geometric glyphs inspired by each brand's mark.
   They use currentColor so they inherit text color from the parent. */

export function ChatGptLogo(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M12 3.2c1.7 0 3.2.9 4.1 2.3a4.7 4.7 0 0 1 2.3 7 4.7 4.7 0 0 1-2.3 7c-.9 1.4-2.4 2.3-4.1 2.3s-3.2-.9-4.1-2.3a4.7 4.7 0 0 1-2.3-7 4.7 4.7 0 0 1 2.3-7C8.8 4.1 10.3 3.2 12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.5 12 8l2.5 1.5v3L12 14l-2.5-1.5v-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClaudeLogo(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M5 18 9.4 6h2.4l4.4 12h-2.4l-1-2.7H8.4L7.4 18H5Zm4-4.7h2.6L10.3 8.6 9 13.3Z"
        fill="currentColor"
      />
      <circle
        cx="18"
        cy="13"
        r="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function GeminiLogo(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M12 2c.6 5 4 8.4 9 9-5 .6-8.4 4-9 9-.6-5-4-8.4-9-9 5-.6 8.4-4 9-9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GrokLogo(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7.5 7.5 16 16M16 8l-8.5 8.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SoraLogo(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9.2 9.5c1-1 2.6-1 3.6 0l1.4 1.4c1 1 1 2.6 0 3.6-1 1-2.6 1-3.6 0L9.2 13.1c-1-1-1-2.6 0-3.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function KiroLogo(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M5 4h2.4v7L13 4h2.8l-5 6.5L16.4 20H13.5L9 12.6 7.4 14.7V20H5V4Z"
        fill="currentColor"
      />
      <circle cx="19" cy="6" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function JimengLogo(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M4 6h6v2H6v3h3.5v2H6v5H4V6Zm9 0h2v8.5L18 11h2.4l-3.7 4.2 4 4.8H18l-3-3.7V20h-2V6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const BRAND_LOGOS: Record<BrandKey, (p: Props) => JSX.Element> = {
  chatgpt: ChatGptLogo,
  claude: ClaudeLogo,
  gemini: GeminiLogo,
  grok: GrokLogo,
  sora: SoraLogo,
  kiro: KiroLogo,
  jimeng: JimengLogo,
};

export function BrandLogo({
  brand,
  ...rest
}: { brand: BrandKey } & Props) {
  const Cmp = BRAND_LOGOS[brand];
  return <Cmp {...rest} />;
}

/* Tiny geometric mark for the wordmark in the navbar */
export function ElevenAiMark(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <defs>
        <linearGradient id="ai-mark-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="6"
        fill="url(#ai-mark-grad)"
      />
      <path
        d="M8.5 8h1.6v8H8.5V8Zm5 0h1.6v8h-1.6V8ZM6 8.8 8 8v8H6.4v-6.4L6 9.6v-.8Z"
        fill="#fff"
      />
    </svg>
  );
}
