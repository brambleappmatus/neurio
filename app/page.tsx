import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}