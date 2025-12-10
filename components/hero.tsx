"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación inicial al cargar la página
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div 
              className={`space-y-4 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Tu aliado en <span className="text-accent">color, calidad</span> y construcción
              </h1>
              <p className="text-xl text-slate-200">
                Distribuidor exclusivo de As Pinturas en Barranquilla. Soluciones profesionales en pintura y acabados.
              </p>
            </div>

            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Link
                href="#contact"
                className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl"
              >
                Contáctanos
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#products"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Ver Productos
              </Link>
            </div>

            {/* Features */}
            <div 
              className={`grid grid-cols-2 gap-4 pt-8 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {[
                { text: "Calidad Premium", delay: "500ms" },
                { text: "Asesoría Técnica", delay: "600ms" },
                { text: "Entrega Rápida", delay: "700ms" },
                { text: "Garantía Completa", delay: "800ms" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-700 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: feature.delay }}
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold transition-all duration-300 hover:bg-accent hover:text-white hover:rotate-12">
                    ✓
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className={`relative h-96 md:h-full flex items-center justify-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-2xl animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-accent rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1">
              <img
                src="/paint-brush-professional-blue-orange-construction.jpg"
                alt="Comercial Prisma - Pinturas profesionales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}