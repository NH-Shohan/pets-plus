'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-mint-faint heading-top-padding hero-heading-bottom-padding">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <div className="relative">
              <h1 className="text-hero-primary">
                <span className="block">Browse</span>
                hundreds of listings
              </h1>
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
                  src="/hero-girl-background.png"
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
                <Image src="/hero-rabbit.png" alt="Rabbit" fill className="object-contain" sizes="max(120px, 11vw)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
