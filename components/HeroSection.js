import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Time to stop feeling embarrassed about thinning hair and brittle nails.
        </h2>
        <p className="text-lg text-gray-700">
          This <strong>clinically tested, 10-second-a-day solution</strong> will bring your confidence back.
          Start seeing results in just 4 weeks!
        </p>
        <a
          href="https://yourshopifystore.myshopify.com/cart/123456789:1"
          className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded font-semibold hover:bg-teal-700"
        >
          Buy Nail n Mane Now
        </a>
        <div className="mt-10">
          <Image
            src="/images/hero-product.jpg"
            alt="Nail n Mane product with healthy hair and nails"
            width={500}
            height={400}
            className="mx-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
