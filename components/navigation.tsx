"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación inicial
    setIsVisible(true);

    // Detectar scroll para cambiar estilo del navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Quiénes Somos", href: "#about" },
    { label: "Productos", href: "#products" },
    { label: "Contacto", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-border transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-3 group transition-all duration-500 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            onClick={closeMenu}
          >
            <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img src="/log.png" alt="Comercial Prisma Logo" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm text-foreground transition-colors group-hover:text-accent">
                Comercial
              </p>
              <p className="font-bold text-sm text-accent">Prisma</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-all duration-500 transform relative group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                }`}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div 
            className={`hidden sm:flex transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href="#contact"
              className="px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 hover:bg-card rounded-lg transition-all duration-300 hover:scale-110 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 space-y-2 pt-4">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium text-foreground hover:bg-card rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`block px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-all duration-300 text-center text-sm hover:scale-105 transform ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: isOpen ? `${menuItems.length * 50}ms` : '0ms' }}
              onClick={closeMenu}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}                  