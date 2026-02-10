'use client';

import { ChevronDown } from '@/components/icons/ChevronDown';
import Link from 'next/link';
import { useState } from 'react';

/* 
  PopularBreeds Section
  - Premium directory-style section for SEO and navigation
  - Mobile: accordion/collapsible categories
  - Desktop: responsive multi-column grid
  - Clean, minimalist aesthetic following Pets&Plus brand
*/

const breedData = [
  {
    title: 'Pets',
    link: '/breeds/pets',
    items: [
      'Dogs',
      'Chinchillas',
      'Cats',
      'Hedgehogs',
      'Birds',
      'Sugar gliders',
      'Rabbits',
      'Turtles',
      'Hamsters',
      'Lizards',
      'Guinea pigs',
      'Snakes',
      'Gerbils',
      'Frogs',
      'Mice & Rats',
      'Mini pigs',
      'Ferrets'
    ]
  },
  {
    title: 'Farm & Livestock',
    link: '/breeds/farm',
    items: [
      'Horses',
      'Turkeys',
      'Ponies',
      'Geese',
      'Cows (Cattle)',
      'Quail',
      'Bulls',
      'Donkeys',
      'Goats',
      'Mules',
      'Sheep',
      'Alpacas',
      'Pigs',
      'Llamas',
      'Chickens',
      'Ducks'
    ]
  },
  {
    title: 'Exotic Species',
    link: '/breeds/exotic',
    items: [
      'Snakes',
      'Freshwater tropical fish',
      'Lizards',
      'Saltwater reef fish',
      'Chameleons',
      'Shrimp',
      'Turtles',
      'Snails',
      'Tortoises',
      'Crayfish',
      'Parrots',
      'Corals',
      'Macaws',
      'Degus',
      'Cockatoos',
      'Hedgehogs'
    ]
  }
];

const PopularBreeds = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F8F8F8] section-padding-top-bottom">
      <div className="main-container">
        <h2 className="text-[max(20px,1.8vw)] font-bold sm:mb-12 mb-8">Learn more about our popular breeds</h2>

        {/* Mobile: accordion */}
        <div className="flex flex-col gap-6 md:hidden">
          {breedData.map((category, index) => (
            <div key={category.title} className="flex flex-col gap-4">
              <div className="rounded-[10px] bg-white border border-border shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(i => (i === index ? null : index))}
                  className="w-full flex items-center justify-between gap-3 px-[20px] py-4 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="card-title-normal font-bold">{category.title}</h3>
                  <span
                    className={`shrink-0 text-foreground transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  >
                    <ChevronDown />
                  </span>
                </button>
                {openIndex === index && (
                  <div className="border-t border-border px-4 py-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {category.items.map(item => (
                        <Link
                          key={item}
                          href={`/breeds/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="relative inline-block w-fit max-w-full text-body-base font-light text-nowrap transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href={category.link}
                className="text-primary font-normal text-body-base underline underline-offset-2 text-center"
              >
                view all {category.title.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-stretch">
          {breedData.map(category => (
            <div key={category.title} className="flex flex-col h-full space-y-4">
              <h3 className="card-title-normal font-bold">{category.title}</h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {category.items.map(item => (
                  <Link
                    key={item}
                    href={`/breeds/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="relative inline-block w-fit max-w-full  text-body-base font-light text-nowrap transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={category.link}
                  className="text-primary font-normal text-body-base underline underline-offset-2"
                >
                  view all {category.title.toLowerCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBreeds;
