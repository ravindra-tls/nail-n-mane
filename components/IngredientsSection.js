
import Image from 'next/image';

const ingredients = [
  { name: "Bhringraj", desc: "Reduces hair thinning and promotes hair volume.", image: "/images/ing-bhringraj.jpg" },
  { name: "Amla", desc: "Improves scalp circulation and supports healthy hair growth.", image: "/images/ing-amla.jpg" },
  { name: "Ashwagandha", desc: "Helps lower cortisol, supporting healthy hair cycles.", image: "/images/ing-ashwagandha.jpg" },
  { name: "Tulsi", desc: "Adaptogen that promotes scalp health.", image: "/images/ing-tulsi.jpg" },
  { name: "Phyllanthus niruri", desc: "Rich in antioxidants that support healthy hair and nail growth.", image: "/images/ing-phyllanthus.jpg" },
  { name: "Licorice", desc: "Soothes scalp and keeps nails moisturized.", image: "/images/ing-licorice.jpg" },
  { name: "Linseed", desc: "Provides omega-3s for shine and strength.", image: "/images/ing-linseed.jpg" },
  { name: "Biotin", desc: "Essential for keratin production to support hair and nail growth.", image: "/images/ing-biotin.jpg" },
  { name: "Vitamin C", desc: "Boosts collagen and protects from oxidative stress.", image: "/images/ing-vitamin-c.jpg" },
  { name: "Vitamin D", desc: "Supports follicle health and cycling.", image: "/images/ing-vitamin-d.jpg" },
  { name: "Vitamin E", desc: "Hydrates and strengthens hair and nails.", image: "/images/ing-vitamin-e.jpg" },
  { name: "Zinc", desc: "Protects against hair loss and brittle nails.", image: "/images/ing-zinc.jpg" }
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="bg-white py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Ingredients that make Nail n Mane so effective</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ingredients.map((ing, idx) => (
          <div key={idx} className="flex">
            <div className="flex-shrink-0 mr-4">
              <Image src={ing.image} alt={ing.name} width={60} height={60} className="rounded-full object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{ing.name}</h4>
              <p className="text-gray-700 text-sm">{ing.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

