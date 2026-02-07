import Categories from '@/components/sections/Categories';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import VerifiedBreeders from '@/components/sections/VerifiedBreeders';
import WhyTrustUs from '@/components/sections/WhyTrustUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Categories />
      <WhyTrustUs />
      <VerifiedBreeders />
      <HowItWorks />
    </main>
  );
}
