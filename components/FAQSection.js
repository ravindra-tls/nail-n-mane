
import { useState } from 'react';

const faqItems = [
  {
    question: "What is Nail n Mane?",
    answer: "Nail n Mane is a clinically tested supplement combining Ayurvedic herbs and modern nutrients like biotin to strengthen hair and nails."
  },
  {
    question: "How do I use it?",
    answer: "Take one capsule daily for at least 12 weeks. Many users start seeing results by week 4."
  },
  {
    question: "Are there any side effects?",
    answer: "In a 12-week clinical study, Nail n Mane was found to be safe and well-tolerated with no reported side effects."
  },
  {
    question: "What ingredients are included?",
    answer: "It contains Ayurvedic herbs like Amla, Bhringraj, Ashwagandha, and nutrients like Biotin, Zinc, Vitamins C, D, and E."
  },
  {
    question: "Is this supplement vegan or vegetarian?",
    answer: "Yes, the supplement is 100% vegetarian and free from animal-derived ingredients."
  }
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center focus:outline-none"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800">{q}</span>
        <svg
          className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.094l3.71-3.864a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0l-4.24-4.41a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="mt-2 text-gray-700">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
      {faqItems.map((item, idx) => (
        <FAQItem key={idx} q={item.question} a={item.answer} />
      ))}
      <p className="mt-6 text-sm text-gray-500 text-center">
        Still have questions? Email us at <a href="mailto:care@theayurvedaexperience.com" className="underline">care@theayurvedaexperience.com</a>
      </p>
    </section>
  );
}

