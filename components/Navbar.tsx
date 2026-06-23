"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Culture", href: "/culture" },
    { name: "Onboarding", href: "/onboarding" },
    { name: "Policies", href: "/policies" },
    { name: "Events", href: "/events" },
    { name: "Contacts", href: "/contacts" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="public/images/Sandhata.jpg"
              alt="Sandhata Logo"
              width={250}
              height={80}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">

          <div className="flex flex-col px-6 py-4">

            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 text-base font-medium transition ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </div>

        </div>
      )}

    </nav>
  );
}
