import type { SiteContent } from './types';

export const siteZh: SiteContent = {
  brand: {
    name: '11AI',
    tagline: '11AI · AI Membership Hub',
  },
  nav: {
    home: '首页',
    store: 'AI 商城',
  },
  hero: {
    eyebrow: '11AI · AI Membership Hub',
    headlineLine1: '一站开通主流',
    headlineGradient: 'AI 会员',
    sub: 'ChatGPT、Claude、Gemini、Grok、Sora 等主流服务，正规渠道开通，售后全程可追溯。',
    primaryCta: '进入 AI 商城',
    secondaryCta: '订单查询',
  },
  marquee: {
    caption: '覆盖的 AI 服务',
    brands: ['Sora', 'Kiro', 'Jimeng', 'ChatGPT', 'Claude', 'Gemini', 'Grok'],
  },
  serviceCommitment: {
    eyebrow: 'SERVICE COMMITMENT',
    heading: '我们的服务承诺',
    sub: '清晰的开通路径、透明的订单状态、可追踪的售后链路。',
    items: [
      {
        icon: 'shield-check',
        title: '正规渠道开通',
        desc: '所有账号通过官方授权渠道开通，确保账号长期可用、安全可靠。',
      },
      {
        icon: 'activity',
        title: '透明订单状态',
        desc: '从下单到激活的每一步都实时可见，进度透明，不留疑问。',
      },
      {
        icon: 'headphones',
        title: '可追踪售后',
        desc: '完整的售后链路记录，遇到问题随时联系，工单全程可查。',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'HOW IT WORKS',
    heading: '三步开通你的 AI 会员',
    sub: '简单流程，全程在线，几分钟即可使用。',
    steps: [
      {
        num: '01',
        title: '选择服务',
        desc: '在 AI 商城浏览所有支持的会员服务，挑选最适合你的方案。',
      },
      {
        num: '02',
        title: '完成支付',
        desc: '支持支付宝、微信、银行卡等多种支付方式，安全便捷。',
      },
      {
        num: '03',
        title: '即时开通',
        desc: '支付完成后系统自动开通，几分钟内即可登录使用。',
      },
    ],
  },
  plans: {
    eyebrow: 'POPULAR PLANS',
    heading: '热门会员方案',
    sub: '主流 AI 会员一键开通，价格透明，长期可续。',
    items: [
      {
        brand: 'chatgpt',
        name: 'ChatGPT Plus',
        price: 168,
        currency: '¥',
        period: '/ 月',
        features: ['GPT-5 全模型解锁', '更高速率与优先访问', '官方账号长期使用'],
        cta: '立即开通',
        popular: false,
      },
      {
        brand: 'claude',
        name: 'Claude Pro',
        price: 158,
        currency: '¥',
        period: '/ 月',
        features: ['Claude 4.5 Sonnet 与 Opus', '更长上下文窗口', '高峰期不掉线'],
        cta: '立即开通',
        popular: true,
        popularLabel: '最受欢迎',
      },
      {
        brand: 'gemini',
        name: 'Gemini Advanced',
        price: 148,
        currency: '¥',
        period: '/ 月',
        features: ['Gemini 2.5 Pro 全功能', 'Google Workspace 集成', '2TB 云端存储'],
        cta: '立即开通',
        popular: false,
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    heading: '常见问题',
    sub: '你想了解的，这里都有答案。',
    items: [
      {
        q: '支持哪些支付方式？',
        a: '我们支持支付宝、微信支付、Apple Pay、银联以及主流国际信用卡。所有交易均通过加密通道处理。',
      },
      {
        q: '下单后多久能开通？',
        a: '绝大多数订单在支付完成后 1–10 分钟内自动开通，特殊套餐最长不超过 24 小时。',
      },
      {
        q: '账号安全吗？是否会被封？',
        a: '所有账号均由正规渠道开通，每个账号独立分配，配合稳定网络环境，长期可用率超过 99%。',
      },
      {
        q: '可以退款吗？',
        a: '未开通的订单可全额退款。已开通但出现服务不可用的情况，我们提供补发或按比例退款。',
      },
      {
        q: '是否有地区限制？',
        a: '本服务主要面向中国大陆与港澳台用户，使用部分服务时建议搭配稳定的国际网络。',
      },
      {
        q: '遇到问题如何联系售后？',
        a: '在订单详情页可直接发起工单，客服 7×12 小时在线响应，所有沟通记录可追溯。',
      },
    ],
  },
  ctaBanner: {
    heading: '准备好开通你的 AI 会员了吗？',
    sub: '正规渠道，分钟级开通，售后无忧。',
    cta: '进入 AI 商城',
  },
  footer: {
    tagline: '一站式 AI 会员开通中心。',
    columns: [
      {
        title: '产品',
        links: [
          { label: 'AI 商城', href: '/store' },
          { label: '订单查询', href: '/orders' },
          { label: '充值中心', href: '/recharge' },
        ],
      },
      {
        title: '支持',
        links: [
          { label: '帮助中心', href: '/help' },
          { label: '联系客服', href: '/contact' },
          { label: '工单系统', href: '/tickets' },
        ],
      },
      {
        title: '法律',
        links: [
          { label: '服务条款', href: '/terms' },
          { label: '隐私政策', href: '/privacy' },
          { label: '退款政策', href: '/refund' },
        ],
      },
    ],
    copyright: '© 2026 11AI. 保留所有权利。',
    icp: '京ICP备XXXXXXXX号',
  },
};
