"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Quiénes Somos", href: "#about" },
    { label: "Productos", href: "#products" },
    { label: "Contacto", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 ">
              <img src="/log.png" alt="" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm text-foreground">Comercial</p>
              <p className="font-bold text-sm text-accent">Prisma</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors scroll-smooth"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex">
            <a
              href="#contact"
              className="px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors text-sm"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-card rounded-lg transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors text-center text-sm"
              onClick={closeMenu}
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
