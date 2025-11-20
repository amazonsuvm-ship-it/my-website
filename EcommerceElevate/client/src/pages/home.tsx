import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { PlatformExpertise } from '@/components/PlatformExpertise';
import { HowItWorks } from '@/components/HowItWorks';
import { CaseStudies } from '@/components/CaseStudies';
import { RecommendationsWidget } from '@/components/RecommendationsWidget';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesGrid />
      <PlatformExpertise />
      <HowItWorks />
      <CaseStudies />
      <RecommendationsWidget />
      <ContactSection />
      <Footer />
    </div>
  );
}
