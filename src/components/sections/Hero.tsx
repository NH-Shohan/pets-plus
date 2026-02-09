"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-mint-faint">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center section-padding-top-bottom">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            <div className="relative">
              <h1 className="text-hero-primary">
                <span className="block">Browse</span>
                hundreds of listings
              </h1>
            </div>

            <p className="text-body-large text-foreground max-w-md">
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
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-[85%] h-[85%] bg-mint-subtle rounded-[32px] sm:rounded-[48px]" />
              <div className="relative z-10">
                <Image
                  src="/hero.png"
                  alt="Happy pet owner with their adorable pets"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
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
