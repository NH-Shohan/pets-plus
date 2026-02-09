import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Pets & Companions",
    image: "/category-1.png",
    href: "/",
  },
  {
    id: 2,
    name: "Farm & Livestock",
    image: "/category-2.png",
    href: "/",
  },
  {
    id: 3,
    name: "Exotic Species",
    image: "/category-3.png",
    href: "/",
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-[#F8F9FA] section-padding-bottom">
      <div className="main-container">
        <SectionHeader
          title="Browse by category"
          description="These dogs have the potential to be wonderful companions for your whole family with the right training."
          headingClassName="section-title"
          descriptionClassName="text-body-medium max-w-4xl"
        />

        {/* View all link */}
        <div className="flex justify-end mb-[27px] mr-8">
          <Link
            href="/"
            className="text-body-base text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            View all listings
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                href={category.href}
                className="group flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
              >
                {/* Image Container */}
                <div className="w-full rounded-[20px] overflow-hidden mb-5 lg:mb-7 bg-surface-light shadow-none">
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

                {/* Category Name */}
                <h3 className="card-title-large text-foreground transition-colors duration-300 ease-out group-hover:text-primary">
                  {category.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
