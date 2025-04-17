export default function CTASection({ text, buttonText }) {
  return (
    <section className="bg-teal-700 text-center py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {text}
      </h2>
      <a
        href="https://yourshopifystore.myshopify.com/cart/123456789:1"
        className="inline-block bg-white text-teal-700 text-lg font-semibold py-3 px-5 rounded hover:bg-gray-100"
      >
        {buttonText}
      </a>
    </section>
  );
}
