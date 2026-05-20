import type { SiteContent } from './types';

export const siteEn: SiteContent = {
  brand: {
    name: '11AI',
    tagline: '11AI · AI Membership Hub',
  },
  nav: {
    home: 'Home',
    store: 'AI Store',
  },
  hero: {
    eyebrow: '11AI · AI Membership Hub',
    headlineLine1: 'One-stop access to',
    headlineGradient: 'AI memberships',
    sub: 'Activate ChatGPT, Claude, Gemini, Grok, Sora and more through authentic channels — fully traceable, end to end.',
    primaryCta: 'Enter AI Store',
    secondaryCta: 'Track order',
  },
  marquee: {
    caption: 'Supported AI services',
    brands: ['Sora', 'Kiro', 'Jimeng', 'ChatGPT', 'Claude', 'Gemini', 'Grok'],
  },
  serviceCommitment: {
    eyebrow: 'SERVICE COMMITMENT',
    heading: 'Our service promise',
    sub: 'A clear activation path, transparent order status, and a fully traceable support trail.',
    items: [
      {
        icon: 'shield-check',
        title: 'Authentic activation',
        desc: 'Every account is activated through officially authorised channels — secure, stable and reliable for the long term.',
      },
      {
        icon: 'activity',
        title: 'Transparent order status',
        desc: 'Every step from purchase to delivery is visible in real time. No guesswork, no surprises.',
      },
      {
        icon: 'headphones',
        title: 'Traceable support',
        desc: 'Full after-sales history is logged. Reach out any time — every ticket and resolution is on record.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'HOW IT WORKS',
    heading: 'Activate your AI membership in three steps',
    sub: 'A simple, fully online flow. Up and running in minutes.',
    steps: [
      {
        num: '01',
        title: 'Pick a service',
        desc: 'Browse every supported membership in the AI Store and pick the one that fits you.',
      },
      {
        num: '02',
        title: 'Pay securely',
        desc: 'Pay with Alipay, WeChat, card, or Apple Pay. Every transaction is encrypted end to end.',
      },
      {
        num: '03',
        title: 'Instant activation',
        desc: 'Once paid, your account is delivered automatically — usually within minutes.',
      },
    ],
  },
  plans: {
    eyebrow: 'POPULAR PLANS',
    heading: 'Most-loved memberships',
    sub: 'One click to activate the AI services people use every day. Transparent pricing, renewable any time.',
    items: [
      {
        brand: 'chatgpt',
        name: 'ChatGPT Plus',
        price: 168,
        currency: '¥',
        period: '/ mo',
        features: ['Full GPT-5 model access', 'Faster, priority access', 'Long-term official account'],
        cta: 'Activate now',
        popular: false,
      },
      {
        brand: 'claude',
        name: 'Claude Pro',
        price: 158,
        currency: '¥',
        period: '/ mo',
        features: ['Claude 4.5 Sonnet & Opus', 'Extended context window', 'Reliable during peak hours'],
        cta: 'Activate now',
        popular: true,
        popularLabel: 'Most popular',
      },
      {
        brand: 'gemini',
        name: 'Gemini Advanced',
        price: 148,
        currency: '¥',
        period: '/ mo',
        features: ['Full Gemini 2.5 Pro access', 'Google Workspace integration', '2TB cloud storage'],
        cta: 'Activate now',
        popular: false,
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'Common questions',
    sub: 'Everything you might want to know.',
    items: [
      {
        q: 'Which payment methods are supported?',
        a: 'Alipay, WeChat Pay, Apple Pay, UnionPay and major international credit cards. Every payment is processed over an encrypted channel.',
      },
      {
        q: 'How fast is activation after payment?',
        a: 'Most orders are activated automatically within 1–10 minutes. A small number of plans may take up to 24 hours.',
      },
      {
        q: 'Are the accounts safe? Can they be banned?',
        a: 'All accounts come from authentic channels and are issued individually. Combined with a stable network setup, the long-term success rate is over 99%.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Orders that have not yet been activated are fully refundable. If a service becomes unusable after activation, we will reissue or refund proportionally.',
      },
      {
        q: 'Are there regional restrictions?',
        a: 'The service is primarily for users in mainland China, Hong Kong, Macao and Taiwan. A stable international network is recommended for some services.',
      },
      {
        q: 'How do I reach support?',
        a: 'You can open a ticket directly from the order detail page. Support is available 12 hours a day, 7 days a week, and every conversation is logged.',
      },
    ],
  },
  ctaBanner: {
    heading: 'Ready to activate your AI membership?',
    sub: 'Authentic channels. Activation in minutes. Worry-free support.',
    cta: 'Enter AI Store',
  },
  footer: {
    tagline: 'Your one-stop AI membership hub.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'AI Store', href: '/store' },
          { label: 'Track order', href: '/orders' },
          { label: 'Top up', href: '/recharge' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help center', href: '/help' },
          { label: 'Contact', href: '/contact' },
          { label: 'Tickets', href: '/tickets' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Terms of service', href: '/terms' },
          { label: 'Privacy', href: '/privacy' },
          { label: 'Refund policy', href: '/refund' },
        ],
      },
    ],
    copyright: '© 2026 11AI. All rights reserved.',
    icp: '京ICP备XXXXXXXX号',
  },
};
