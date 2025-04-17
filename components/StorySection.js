
import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
      <h2 className="text-xl font-bold mb-4">Everyone has a connection between self-esteem and their hair...</h2>
      <p className="mb-4">
        Perhaps you’ve rarely paid attention to your hair and considered yourself above these “superficial” matters. But what if you <em>do</em> care? What if you still want gorgeous hair you can flaunt, or you just want your confidence back?
      </p>
      <p className="mb-4">
        What if you’re tired of picking up hair from your pillow and seeing the volume of your mane go down each month? You’ve tried expensive salon treatments, messy DIY remedies, yet end up with the same hair – maybe even more weakened by all those trials.
      </p>
      <h3 className="text-lg font-semibold mt-8 mb-2">Time to move from "what if" to <span className="text-teal-700">here it is</span>!</h3>
      <h3 className="text-lg font-semibold mb-4">Here’s nature’s 10-second-a-day way to bring back your hair’s youthful bounce and your nails’ strength, with Nail n Mane.</h3>
      <Image src="/images/hair-confident.jpg" alt="Woman with healthy hair looking confident" width={600} height={400} className="rounded mb-6" />
      <h3 className="text-lg font-bold text-teal-800 mb-2">UPON USING NAIL N MANE FOR 12 WEEKS, participants reported:</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>27% reduction in hair fall by week 4</li>
        <li>Significant increase in hair thickness and smoothness</li>
        <li>44% increase in hair length by week 12</li>
        <li>50% improvement in nail length and strength</li>
      </ul>
      <p className="mb-6">These results demonstrate Nail n Mane's effectiveness in enhancing hair and nail health – and that’s why we offer a <strong>100% Money-Back Guarantee</strong> with full confidence!</p>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Did you know unhealthy nails can signal poor hygiene and health?</h3>
      <p className="mb-4">
        Many people hide stained, ridged nails under polish. But frequent gel manicures can weaken your nails further with harsh UV lights and chemicals, creating a vicious cycle of brittle nails that you keep trying to cover up.
      </p>
      <p className="mb-4">
        In Ayurveda, practitioners examine the state of your nails and hair as an important indicator of your internal health. Deficiencies in B-vitamins, calcium, or zinc often first show up as problems in your nails and hair.
      </p>
      <h4 className="text-md font-semibold text-teal-700 mb-2">There’s a reason hair and nails take a hit as you age:</h4>
      <p className="mb-4">
        Our bodies produce less keratin with age. Keratin (which makes up ~95% of hair and nails) provides strength and luster. As keratin declines, hair becomes dull and nails brittle.
      </p>
      <p className="mb-4">
        <strong>That’s why Nail n Mane combines potent Ayurvedic herbs with biotin and Vitamins C, D, E, and zinc</strong> – to replenish what aging steals away, and give you back your strong, healthy hair and nails.
      </p>
    </section>
  );
}

