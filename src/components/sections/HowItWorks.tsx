import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Browse",
    description:
      "Search through thousands of verified listings from trusted breeders. Filter by breed, location, price, and more to find your perfect match.",
    image: "/sitting-man.png",
  },
  {
    id: 2,
    title: "Connect",
    description:
      "Message breeders directly to ask questions about health, temperament, and care. Schedule visits or video calls to meet your future companion.",
    image: "/sitting-man.png",
  },
  {
    id: 3,
    title: "Welcome",
    description:
      "Complete your purchase with secure payment processing, health guarantees, and full buyer protection. Welcome your new family member home!",
    image: "/sitting-man.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white section-padding-top-bottom">
      <div className="main-container">
        <SectionHeader
          title="How it works"
          description="Whether you're browsing or selling, we've made it easy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={255}
                  height={255}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-display-small text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-body-base text-foreground max-w-[340px] w-full">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
