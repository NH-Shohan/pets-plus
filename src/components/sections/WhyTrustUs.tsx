import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const features = [
  {
    id: 1,
    title: "Verified Breeders",
    description:
      "Every breeder undergoes thorough background checks and certification",
    icon: "/check.svg",
    width: 40,
    height: 40,
  },
  {
    id: 2,
    title: "Secure Messaging",
    description:
      "Strict breeding standards ensure healthy, well-cared-for animals",
    icon: "/shield.svg",
    width: 36,
    height: 36,
  },
  {
    id: 3,
    title: "Reviewed & Rated",
    description:
      "Expert team available around the clock to assist buyers and breeders.",
    icon: "/people.svg",
    width: 48,
    height: 48,
  },
];

export default function WhyTrustUs() {
  return (
    <section className="w-full bg-[#FCFCFD] section-padding-top-bottom">
      <div className="main-container">
        <SectionHeader
          title="Why buyers trust us"
          description="Whether you're browsing or selling, we've made it easy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-8 md:p-12 rounded-[20px] border border-[#EEEEEE]"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={feature.width}
                  height={feature.height}
                />
              </div>

              {/* Title */}
              <h3 className="card-title-medium text-primary mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-body-medium max-w-[470px] w-full">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
