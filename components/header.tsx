"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          PERPETUAL
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-white font-medium hover:text-blue-600 transition-colors
                    ${isActive ? "text-blue-900" : ""}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative text-white font-medium hover:text-blue-600 transition-colors
                      ${isActive ? "text-blue-600" : ""}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
