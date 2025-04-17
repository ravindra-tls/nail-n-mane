import Image from 'next/image';

const experts = [
  {
    name: "Shanel Miller",
    credentials: "Certified Ayurvedic Practitioner, B.Sc. Chemistry",
    affiliation: "Southern California University of Health Sciences",
    image: "/images/expert-shanel.jpg",
    quote: "The results my clients have experienced are remarkable. They report improved self-esteem, stronger and longer hair and nails, and a newfound shine that was absent before."
  },
  {
    name: "Jennifer Maklan",
    credentials: "Samudra Ayurvedic Practitioner, BFA",
    affiliation: "University of New Hampshire",
    image: "/images/expert-jennifer.jpg",
    quote: "Ingredients like Licorice, Bhringraj, Amla, and Ashwagandha are incredible strengtheners for the body's tissues — the offshoot of which are the hair and nails."
  }
];

export default function ExpertsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Natural Health Practitioner Approved</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experts.map((exp, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <Image src={exp.image} alt={`Photo of ${exp.name}`} width={80} height={80} className="rounded-full" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.name}</h3>
                <p className="text-sm text-gray-600">{exp.credentials}</p>
                <p className="text-sm text-gray-600">{exp.affiliation}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 italic">“{exp.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

