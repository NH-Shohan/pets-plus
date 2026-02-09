"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-mint-faint">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center section-padding-top-bottom">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            <div className="relative">
              <h1 className="text-hero-primary">
                <span className="block">Browse</span>
                hundreds of listings
              </h1>
            </div>

            <p className="text-hero-secondary margin-bottom-lg">
              Connect directly with trusted breeders.
            </p>

            <div>
              <Button variant="primary" size="default">
                Browse listings
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl">
              <div className="relative w-full aspect-square mx-auto lg:mx-0">
                {/* Main Image */}
                <div className="absolute inset-0 z-10">
                  <Image
                    src="/hero-girl-background.png"
                    alt="Happy pet owner"
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>

                {/* Floating Rabbit - Fixed position */}
                <div className="absolute bottom-0 right-0 z-20 translate-x-[10%] translate-y-[0%]">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 overflow-hidden">
                    <Image
                      src="/hero-rabbit.png"
                      alt="Rabbit"
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
