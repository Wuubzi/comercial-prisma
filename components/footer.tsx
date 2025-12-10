"use client"
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState({
    columns: false,
    social: false,
    cta: false,
    bottom: false,
  });

  const columnsRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const refName = entry.target.dataset.ref;
          setIsVisible((prev) => ({ ...prev, [refName]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const refs = [
      { ref: columnsRef, name: "columns" },
      { ref: socialRef, name: "social" },
      { ref: ctaRef, name: "cta" },
      { ref: bottomRef, name: "bottom" },
    ];

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          ref={columnsRef}
          data-ref="columns"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible.columns
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <img src="/log.png" alt="Comercial Prisma Logo" />
              </div>
              <h3 className="font-bold text-lg transition-colors group-hover:text-accent">
                Comercial Prisma
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Distribuidor exclusivo de As Pinturas. Tu aliado en color, calidad
              y construcción.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible.columns
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible.columns ? "150ms" : "0ms" }}
          >
            <h4 className="font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="transition-all duration-300 hover:translate-x-2">
                <a
                  href="#hero"
                  className="hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  Inicio
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </li>
              <li className="transition-all duration-300 hover:translate-x-2">
                <a
                  href="#about"
                  className="hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  Quiénes Somos
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </li>
              <li className="transition-all duration-300 hover:translate-x-2">
                <a
                  href="#products"
                  className="hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  Productos
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </li>
              <li className="transition-all duration-300 hover:translate-x-2">
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  Contacto
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible.columns
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible.columns ? "300ms" : "0ms" }}
          >
            <h4 className="font-semibold mb-4 text-white">Productos</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-accent transition-all duration-300 cursor-pointer hover:translate-x-2">
                Pinturas de Tráfico
              </li>
              <li className="hover:text-accent transition-all duration-300 cursor-pointer hover:translate-x-2">
                Vinilos Tipo 1
              </li>
              <li className="hover:text-accent transition-all duration-300 cursor-pointer hover:translate-x-2">
                Vinilos Tipo 2
              </li>
              <li className="hover:text-accent transition-all duration-300 cursor-pointer hover:translate-x-2">
                Esmaltes
              </li>
              <li className="hover:text-accent transition-all duration-300 cursor-pointer hover:translate-x-2">
                Anticorrosivos
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible.columns
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible.columns ? "450ms" : "0ms" }}
          >
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3 hover:text-accent transition-all duration-300 hover:translate-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+573001234567">+57 (5) 300-123-4567</a>
              </li>
              <li className="flex items-center gap-3 hover:text-accent transition-all duration-300 hover:translate-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@comercialprisma.com">
                  info@comercialprisma.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Barranquilla, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          {/* Social Links */}
          <div
            ref={socialRef}
            data-ref="social"
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <div className="flex gap-4">
              <a
                href="#facebook"
                className={`w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isVisible.social
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#instagram"
                className={`w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isVisible.social
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: isVisible.social ? "100ms" : "0ms" }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#linkedin"
                className={`w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isVisible.social
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: isVisible.social ? "200ms" : "0ms" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p
              className={`text-sm text-slate-400 transition-all duration-700 ${
                isVisible.social ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              © {currentYear} Comercial Prisma. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          data-ref="cta"
          className={`bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-center border border-slate-700 relative overflow-hidden transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl ${
            isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-accent/5 animate-pulse"></div>
          
          <div className="relative">
            <p className="text-sm text-slate-300 mb-3">
              ¿Necesitas ayuda con tu proyecto?
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              Solicita una consulta
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="border-t border-slate-800 py-6">
        <div
          ref={bottomRef}
          data-ref="bottom"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500"
        >
          <p
            className={`transition-all duration-1000 ${
              isVisible.bottom ? "opacity-100" : "opacity-0"
            }`}
          >
            Diseñado para potenciar tu negocio | Soluciones de pintura de clase
            mundial
          </p>
        </div>
      </div>
    </footer>
  );
}