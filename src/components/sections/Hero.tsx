'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';
import SearchInput from '../ui/SearchInput';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-mint-faint heading-top-padding hero-heading-bottom-padding">
      <div className="main-container">
        <div className="block min-[1380px]:hidden pt-[13px] pb-[28px]">
          <SearchInput placeholder="Search" className="bg-white" onSearch={query => console.log('Search:', query)} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="relative">
              <h1 className="text-hero-primary leading-[1.1] sm:leading-[0.9]">Browse hundreds of listings</h1>
            </div>

            <div className="flex flex-col">
              <p className="text-hero-secondary margin-bottom-lg margin-top-lg">
                Connect directly with trusted breeders.
              </p>
              <div>
                <Button variant="primary" size="default">
                  Browse listings
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{
                width: 'max(350px, 37vw)',
                height: 'max(350px, 37vw)'
              }}
            >
              {/* Girl Background SVG - positioned slightly right, sized proportionally */}
              <div
                className="absolute"
                style={{
                  bottom: '-3.5%',
                  right: '-0.6%',
                  width: '82%',
                  height: '92%'
                }}
              >
                <Image
                  src="/girl-background.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="max(280px, 30vw)"
                  priority
                  aria-hidden="true"
                />
              </div>

              {/* Girl Holding Dog Photo - fills the container */}
              <div className="absolute inset-0 z-40">
                <Image
                  src="/girl-holding-dog.avif"
                  alt="Happy pet owner holding a dog"
                  fill
                  className="object-contain object-bottom"
                  sizes="max(350px, 37vw)"
                  priority
                />
              </div>

              {/* Floating Rabbit with background - bottom right corner */}
              <div
                className="absolute"
                style={{
                  bottom: '0%',
                  right: '-7%',
                  width: '30%',
                  height: '30%'
                }}
              >
                {/* Rabbit Background */}
                <div
                  className="absolute"
                  style={{
                    bottom: '3%',
                    right: '4%',
                    width: '90%',
                    height: '80%'
                  }}
                >
                  <Image
                    src="/rabbit-background.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                    priority
                  />
                </div>
                {/* Rabbit Photo */}
                <Image
                  src="/rabbit.avif"
                  alt="Cute rabbit"
                  fill
                  className="object-contain object-bottom"
                  sizes="max(80px, 10vw)"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
