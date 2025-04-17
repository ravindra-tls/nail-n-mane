import { useState, useEffect } from 'react';

const highlights = [
  {
    title: "THICKER, STRONGER, LONGER HAIR",
    subtitle: "and a HEALTHY SCALP",
    plus: "2X LONGER, STRONGER, BRIGHTER NAILS",
    note: "Visible results with just one 10-second step a day!"
  },
  {
    title: "VISIBLE HAIR GROWTH",
    subtitle: "in just 4 weeks",
    plus: "and NOTICEABLE NAIL STRENGTH",
    note: "Clinically tested and verified."
  }
];

export default function ResultsHighlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const h = highlights[index];

  return (
    <section className="bg-teal-800 text-white text-center py-8 px-4">
      <h2 className="text-xl md:text-2xl font-bold">Clinical Trial Shows:</h2>
      <p className="mt-4 text-lg md:text-xl font-semibold">
        {h.title} <span className="text-teal-200">{h.subtitle}</span>
      </p>
      <p className="text-lg md:text-xl font-semibold mt-1">
        + {h.plus}
      </p>
      <p className="mt-2 italic">{h.note}</p>
    </section>
  );
}
