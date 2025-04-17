
const qualityPoints = [
  { title: "Tested Gluten-Free", desc: "Verified safe for those with gluten sensitivities." },
  { title: "Non-GMO", desc: "Ingredients sourced without genetic modification." },
  { title: "Heavy Metal Tested", desc: "Checked for lead, mercury, cadmium, and arsenic." },
  { title: "Pesticide-Free", desc: "Free from harmful chemical residues." },
  { title: "Microbial Safety", desc: "Safe levels of microbial content ensured." },
  { title: "Standardized Extracts", desc: "Ensures consistent potency in each dose." },
  { title: "Raw + Final Testing", desc: "Dual testing of raw material and final product." },
  { title: "GMP Certified", desc: "Manufactured in certified GMP facilities." },
  { title: "FDA-Registered Facility", desc: "Made in an FDA-registered U.S. facility." },
  { title: "Third-Party Lab Verified", desc: "Verified by independent labs for safety and performance." }
];

export default function QualitySection() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">10 Steps to Safety & Quality Assurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityPoints.map((point, idx) => (
            <div key={idx} className="flex items-start">
              <div className="text-teal-600 mr-3 mt-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{point.title}</h4>
                <p className="text-gray-700 text-sm">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-800 text-center max-w-xl mx-auto">
          <em>Make a well-informed choice with Nail n Mane, and bring health, hygiene, and confidence back into your life.</em>
        </p>
      </div>
    </section>
  );
}

