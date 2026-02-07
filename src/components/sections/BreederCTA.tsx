import Image from "next/image";
import Link from "next/link";

/* 
  BreederCTA Section
  - Premium CTA card for breeders
  - Matches the design reference with a soft mint background
  - Fully responsive layout
*/

const BreederCTA = () => {
  return (
    <section className="bg-mi py-16 px-6 lg:px-20 font-jakarta">
      <div className="container mx-auto">
        <div className="bg-[#f3faf8] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Illustration - Left side */}
          <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 relative">
            <Image
              src="/breeder.svg"
              alt="Breeder illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Content - Right side */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Are you a responsible breeder?
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl">
              We'd love to invite you to join our community of trusted breeders.
              We only list screened breeders and help connect you directly with
              educated, serious buyers.
            </p>
            <div className="pt-2">
              <Link
                href="/become-a-breeder"
                className="text-foreground font-bold text-xl underline underline-offset-8 decoration-2 hover:text-primary transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreederCTA;
