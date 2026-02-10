'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const categories = [
  {
    id: 1,
    name: 'Pets & Companions',
    image: '/category-1.webp',
    href: '/'
  },
  {
    id: 2,
    name: 'Farm & Livestock',
    image: '/category-2.webp',
    href: '/'
  },
  {
    id: 3,
    name: 'Exotic Species',
    image: '/category-3.webp',
    href: '/'
  }
];

function CategoryCard({ category }: { category: (typeof categories)[number] }) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[max(10px,1.0416666667vw)]"
    >
      <div className="w-full rounded-[max(10px,1.0416666667vw)] overflow-hidden mb-[max(20px,1.0416666667vw)] bg-surface-light shadow-none">
        <div className="w-full aspect-[4/4.4] overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            width={460}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="card-title-large text-foreground transition-colors duration-300 ease-out group-hover:text-primary">
        {category.name}
      </h3>
    </Link>
  );
}

export default function Categories() {
  return (
    <section className="w-full bg-[#F8F9FA] section-padding-bottom overflow-hidden">
      <div className="main-container">
        <SectionHeader
          title="Browse by category"
          description="These dogs have the potential to be wonderful companions for your whole family with the right training."
          headingClassName="section-title--lg"
          descriptionClassName="text-body-large font-normal! max-w-[max(342px,17.81vw)] sm:max-w-[max(750px,40vw)]"
        />

        {/* View all link */}
        <div className="flex justify-center lg:justify-end mb-[max(27px,1.40625vw)] lg:mr-[max(28px,1.40625vw)]">
          <Link
            href="/"
            className="text-body-medium font-normal! text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            View all listings
          </Link>
        </div>

        {/* Category Cards - Grid on desktop (lg+) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Category Cards - Swiper on responsive */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={21}
            slidesPerView={1.1}
            centeredSlides={false}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 }
            }}
            className="categories-swiper overflow-visible!"
          >
            {categories.map(category => (
              <SwiperSlide key={category.id}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
