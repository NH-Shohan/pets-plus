import Link from "next/link";

/* 
  PopularBreeds Section
  - Premium directory-style section for SEO and navigation
  - Responsive multi-column layout
  - Clean, minimalist aesthetic following Pets&Plus brand
*/

const breedData = [
  {
    title: "Pets",
    link: "/breeds/pets",
    items: [
      "Dogs",
      "Cats",
      "Birds",
      "Rabbits",
      "Hamsters",
      "Guinea pigs",
      "Gerbils",
      "Mice & Rats",
      "Ferrets",
      "Chinchillas",
      "Hedgehogs",
      "Sugar gliders",
      "Turtles",
      "Lizards",
      "Snakes",
      "Frogs",
      "Mini pigs",
    ],
  },
  {
    title: "Farm & Livestock",
    link: "/breeds/farm",
    items: [
      "Horses",
      "Ponies",
      "Cows (Cattle)",
      "Bulls",
      "Goats",
      "Sheep",
      "Pigs",
      "Chickens",
      "Ducks",
      "Turkeys",
      "Geese",
      "Quail",
      "Donkeys",
      "Mules",
      "Alpacas",
      "Llamas",
    ],
  },
  {
    title: "Exotic Species",
    link: "/breeds/exotic",
    items: [
      "Snakes",
      "Lizards",
      "Chameleons",
      "Turtles",
      "Tortoises",
      "Parrots",
      "Macaws",
      "Cockatoos",
      "Freshwater tropical fish",
      "Saltwater reef fish",
      "Shrimp",
      "Snails",
      "Crayfish",
      "Corals",
      "Degus",
      "Hedgehogs",
    ],
  },
];

const PopularBreeds = () => {
  return (
    <section className="bg-[#F8F8F8] py-25 font-jakarta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-15 tracking-tight">
          Learn more about our popular breeds
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-stretch">
          {breedData.map((category) => (
            <div
              key={category.title}
              className="flex flex-col h-full space-y-3"
            >
              <h3 className="text-xl font-bold text-foreground">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {category.items.map((item) => (
                  <Link
                    key={item}
                    href={`/breeds/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-foreground text-base font-light truncate"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-4">
                <Link
                  href={category.link}
                  className="text-primary font-normal text-base underline"
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
