'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/conferences', label: 'Conferences' },
  { href: '/vendors', label: 'Vendors' },
  { href: '/membership', label: 'Membership' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-badge.png"
              alt="NCHIA Logo"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
            <span className="ml-3 text-lg font-semibold text-[#1A2566] hidden sm:block">
              NCHIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1A1A1A] hover:text-[#2D3E8C] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Register Button */}
          <div className="hidden lg:block">
            <Link
              href="/conferences/spring"
              className="btn-primary inline-block"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1A1A1A] hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#1A1A1A] hover:text-[#2D3E8C] font-medium py-2 px-4 rounded hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/conferences/spring"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Register Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
