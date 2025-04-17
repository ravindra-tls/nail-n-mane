export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Nail n Mane</h3>
          <p className="text-gray-400 text-sm">Trusted Ayurvedic solutions for stronger hair and nails – loved by thousands globally.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">Need Help?</h3>
          <p className="text-gray-200 text-sm">Email: <a href="mailto:care@theayurvedaexperience.com" className="underline">care@theayurvedaexperience.com</a></p>
          <p className="text-gray-200 text-sm">Call: +1 (678) 498-7248</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:underline">Terms of Use</a></li>
            <li><a href="/refunds" className="hover:underline">Exchanges & Refunds</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-xs">
        <p>© 2025 Nail n Mane. All rights reserved.</p>
        <p className="mt-2 max-w-md mx-auto">*Disclaimer: Results may vary. This product is not intended to diagnose, treat, cure, or prevent any disease.*</p>
      </div>
    </footer>
  );
}

