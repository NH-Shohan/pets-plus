import Categories from '@/components/sections/Categories';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Categories />
    </main>
  );
}
