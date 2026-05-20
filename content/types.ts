export type BrandKey =
  | 'sora'
  | 'kiro'
  | 'jimeng'
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'grok';

export type IconKey = 'shield-check' | 'activity' | 'headphones';

export interface CommitmentItem {
  icon: IconKey;
  title: string;
  desc: string;
}

export interface HowStep {
  num: string;
  title: string;
  desc: string;
}

export interface Plan {
  brand: BrandKey;
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
  popularLabel?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SiteContent {
  brand: { name: string; tagline: string };
  nav: { home: string; store: string };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineGradient: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
  };
  marquee: { caption: string; brands: string[] };
  serviceCommitment: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: CommitmentItem[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    sub: string;
    steps: HowStep[];
  };
  plans: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: Plan[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: FaqItem[];
  };
  ctaBanner: { heading: string; sub: string; cta: string };
  footer: {
    tagline: string;
    columns: FooterColumn[];
    copyright: string;
    icp: string;
  };
}
