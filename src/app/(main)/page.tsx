import Categories from '@/components/sections/Categories';
import Hero from '@/components/sections/Hero';
import PopularBreeds from '@/components/sections/PopularBreeds';
import Newsletter from '@/components/sections/Newsletter';
import BreederCTA from '@/components/sections/BreederCTA';
import FAQ from '@/components/sections/FAQ';
import HowItWorks from '@/components/sections/HowItWorks';
import VerifiedBreeders from '@/components/sections/VerifiedBreeders';
import WhyTrustUs from '@/components/sections/WhyTrustUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Categories />
      <WhyTrustUs />
      <VerifiedBreeders />
      <HowItWorks />
      <BreederCTA />
      <FAQ />
      <Newsletter />
      <PopularBreeds />
    </div>
  );
}
