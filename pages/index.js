import { useTranslation, Trans } from 'next-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { Suspense } from 'react';

import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import i18next from 'i18next';


i18next
.use(Backend) 
.use(LanguageDetector)
.use(initReactI18next)
.init({
  fallbackLng: 'en', // Use en if detected lng is not available
  // debug: true,
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  react: {
    useSuspense: false,
  },
  backend: {
    // for all available options read the backend's repository readme file
    loadPath: 'locales/{{lng}}.json'
  }
});

const Home = () => {
  const { t, i18n } = useTranslation()
  return (
    <div suppressHydrationWarning>
      <Head>
        <title>
          Nextly - Free Nextjs & TailwindCSS Landing Page Template
        </title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle={t('index_benefits_pretitle')}
        title={t('index_benefits_title')}>
        {t('index_benefits_bodyDescription')}
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle= {t('index_video_pretitle')}
        title={t('index_video_title')}>
        {t('index_video_bodyDescription')}
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle={t('index_testimonials_pretitle')}
        title={t('index_testimonials_title')}>
        {t('index_testimonials_bodyDescription')}
      </SectionTitle>
      <Testimonials />
      <SectionTitle 
        pretitle={t('index_faq_pretitle')}
        title={t('index_faq_title')}>
        {t('index_faq_bodyDescription')}
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </div>
  );
}

export default Home;