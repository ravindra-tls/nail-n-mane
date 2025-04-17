
import Image from 'next/image';

const testimonials = [
  {
    name: "Lisa S.",
    age: 52,
    title: "This supplement really brings results!",
    text: "I used this supplement for 8 weeks, and it truly brought me nice results. My hair feels fuller, and my nails grew out stronger. I definitely recommend it!",
    beforeImage: "/images/testimonial-lisa-before.jpg",
    afterImage: "/images/testimonial-lisa-after.jpg"
  },
  {
    name: "Maritza B.",
    age: 45,
    title: "Wow!",
    text: "Once I started using this supplement, my nails grew strong after 8 weeks of use. My hair thinning also improved.",
    beforeImage: "/images/testimonial-maritza-before.jpg",
    afterImage: "/images/testimonial-maritza-after.jpg"
  },
  {
    name: "Traci M.",
    age: 44,
    title: "Amazing Results!!",
    text: "After eight weeks, my nails look amazing and my hair has grown so much fuller and thicker. Highly recommended!!",
    beforeImage: "/images/testimonial-traci-before.jpg",
    afterImage: "/images/testimonial-traci-after.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Thousands of women over 40 have experienced improved hair coverage, shine & strength!
        </h2>
        {testimonials.map((t, idx) => (
          <div key={idx} className="mb-12">
            <div className="text-teal-600 text-xl mb-2">★★★★★</div>
            <h3 className="text-xl font-semibold text-gray-800">{t.title}</h3>
            <div className="flex flex-col sm:flex-row sm:space-x-4 items-center my-4">
              <div className="sm:w-1/2 text-center">
                <Image src={t.beforeImage} alt={`${t.name} before`} width={300} height={300} className="rounded-md" />
                <p className="text-sm text-gray-600 mt-2">Before</p>
              </div>
              <div className="sm:w-1/2 text-center mt-4 sm:mt-0">
                <Image src={t.afterImage} alt={`${t.name} after`} width={300} height={300} className="rounded-md" />
                <p className="text-sm text-gray-600 mt-2">After</p>
              </div>
            </div>
            <p className="text-gray-800 font-medium">{t.name}, {t.age} <span className="text-xs text-gray-500 align-middle">– VERIFIED BUYER</span></p>
            <p className="mt-2 text-gray-700 italic">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

