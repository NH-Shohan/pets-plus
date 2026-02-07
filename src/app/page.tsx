import Hero from "@/components/sections/Hero";
import PopularBreeds from "@/components/sections/PopularBreeds";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FAQ />
      <Newsletter />
      <PopularBreeds />
    </div>
  );
}
