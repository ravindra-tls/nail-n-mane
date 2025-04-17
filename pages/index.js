import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ResultsHighlight from '../components/ResultsHighlight';
import IntroBenefits from '../components/IntroBenefits';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ExpertsSection from '../components/ExpertsSection';
import StorySection from '../components/StorySection';
import IngredientsSection from '../components/IngredientsSection';
import QualitySection from '../components/QualitySection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function NailNManePage() {
  return (
    <>
      <Head>
        <title>Nail n Mane – Ayurvedic Hair & Nail Supplement</title>
        <meta
          name="description"
          content="Clinically tested supplement for stronger hair and nails."
        />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <ResultsHighlight />
        <IntroBenefits />
        <TestimonialsSection />
        <CTASection
          text="Order Nail n Mane now and start seeing results in just 4 weeks!"
          buttonText="Get Nail n Mane"
        />
        <ExpertsSection />
        <StorySection />
        <CTASection
          text="Try this clinically tested 1-capsule-a-day solution today!"
          buttonText="Buy Now"
        />
        <IngredientsSection />
        <QualitySection />
        <CTASection
          text="Ready to transform your hair and nails?"
          buttonText="Shop Nail n Mane"
        />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
