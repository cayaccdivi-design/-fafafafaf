import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getSiteContent } from '@/content';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LogoMarquee } from '@/components/LogoMarquee';
import { ServiceCommitment } from '@/components/ServiceCommitment';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturedPlans } from '@/components/FeaturedPlans';
import { FAQ } from '@/components/FAQ';
import { CTABanner } from '@/components/CTABanner';
import { Footer } from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const site = getSiteContent(locale);
  const t = await getTranslations('A11y');

  return (
    <>
      <a href="#main" className="skip-link">
        {t('skipToContent')}
      </a>

      <Navbar brand={site.brand.name} nav={site.nav} />

      <main id="main">
        <Hero hero={site.hero} />
        <LogoMarquee marquee={site.marquee} ariaLabel={t('marqueeLabel')} />
        <ServiceCommitment data={site.serviceCommitment} />
        <HowItWorks data={site.howItWorks} />
        <FeaturedPlans data={site.plans} />
        <FAQ data={site.faq} />
        <CTABanner data={site.ctaBanner} />
      </main>

      <Footer brand={site.brand.name} data={site.footer} />
    </>
  );
}
