'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';
import SearchInput from '../ui/SearchInput';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-mint-faint heading-top-padding hero-heading-bottom-padding">
      <div className="main-container">
        <div className="block lg:hidden pt-[13px] pb-[28px]">
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
              {/* Main Image */}
              <div className="absolute inset-0 z-10">
                <Image
                  src="/girl-holding-dog.avif"
                  alt="Happy pet owner"
                  fill
                  className="object-contain object-bottom"
                  sizes="max(350px, 37vw)"
                  priority
                />
              </div>

              {/* Floating Rabbit - Fixed position with vw-based sizing */}
              <div
                className="absolute z-20 overflow-hidden"
                style={{
                  bottom: 0,
                  right: 0,
                  transform: 'translateX(20%)',
                  width: 'max(120px, 11vw)',
                  height: 'max(120px, 11vw)'
                }}
              >
                <Image src="/rabbit.avif" alt="Rabbit" fill className="object-contain" sizes="max(120px, 11vw)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
