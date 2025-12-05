"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Tu aliado en <span className="text-accent">color, calidad</span> y construcción
              </h1>
              <p className="text-xl text-slate-200">
                Distribuidor exclusivo de As Pinturas en Barranquilla. Soluciones profesionales en pintura y acabados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Contáctanos
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#products"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold rounded-lg transition-colors"
              >
                Ver Productos
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Calidad Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Asesoría Técnica</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold">
                  ✓
                </div>
                <span className="text-sm font-medium">Garantía Completa</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-2xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-accent rounded-2xl overflow-hidden flex items-center justify-center">
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
