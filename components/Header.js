import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <span className="font-bold text-xl text-gray-800 cursor-pointer">Nail n Mane</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#benefits" className="hover:text-teal-600">Benefits</Link>
          <Link href="#ingredients" className="hover:text-teal-600">Ingredients</Link>
          <Link href="#faq" className="hover:text-teal-600">FAQ</Link>
        </nav>
        <a
          href="https://yourshopifystore.myshopify.com/cart/123456789:1"
          className="bg-teal-600 text-white px-4 py-2 rounded font-medium hover:bg-teal-700 text-sm"
        >
          Buy Now
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-4 text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <Link href="#benefits" className="block py-2">Benefits</Link>
          <Link href="#ingredients" className="block py-2">Ingredients</Link>
          <Link href="#faq" className="block py-2">FAQ</Link>
        </div>
      )}
    </header>
  );
}
