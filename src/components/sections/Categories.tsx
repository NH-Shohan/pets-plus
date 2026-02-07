'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Pets & Companions',
    image: '/category-1.png',
    href: '/',
  },
  {
    id: 2,
    name: 'Farm & Livestock',
    image: '/category-2.png',
    href: '/',
  },
  {
    id: 3,
    name: 'Exotic Species',
    image: '/category-3.png',
    href: '/',
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <h2 className="text-hero-tertiary text-foreground mb-4">Browse by category</h2>
          <p className="text-body-base text-foreground max-w-xl">
            These dogs have the potential to be wonderful companions for your whole family with the right training.
          </p>
        </div>

        {/* View all link */}
        <div className="flex justify-end mb-3">
          <Link
            href="/"
            className="text-body-xs text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            View all listings
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href="/" className="group flex flex-col items-center">
              {/* Image Container */}
              <div className="w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Name */}
              <h3 className="text-display-medium text-foreground">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
