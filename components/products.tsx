"use client";

import { useState } from "react";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 1,
      name: "Pinturas de Tráfico",
      category: "Especialidad",
      description:
        "Pinturas especializadas para señalización vial y marcas de tránsito. Diseñadas con alta visibilidad reflectante y durabilidad extrema.",
      features: [
        "Alta visibilidad reflectante",
        "Resistencia a la intemperie",
        "Secado rápido",
        "Excelente cobertura",
        "Colores normalizados",
      ],
      image: "/pintura_trafico.jpg",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "Vinilos Tipo 1",
      category: "Acabados",
      description:
        "Vinilos de primera calidad para interiores con acabado mate elegante. Ideales para paredes y techos con máxima cobertura.",
      features: [
        "Acabado mate uniforme",
        "Bajo olor",
        "Fácil aplicación",
        "Cobertura excelente",
        "Resistente al lavado",
      ],
      image: "/vinilo_1.jpg",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      name: "Vinilos Tipo 2",
      category: "Premium",
      description:
        "Vinilos premium con acabado satinado para espacios comerciales y residenciales. Mayor durabilidad y resistencia.",
      features: [
        "Acabado satinado profesional",
        "Resistencia mejorada",
        "Mayor cobertura",
        "Anti-hongos",
        "Larga durabilidad",
      ],
      image: "/vinilos_2.jpg",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 4,
      name: "Esmaltes",
      category: "Protección",
      description:
        "Esmaltes de alto rendimiento para madera y metal. Acabado brillante con excelente protección y durabilidad.",
      features: [
        "Acabado brillante intenso",
        "Excelente adhesión",
        "Protección superior",
        "Resistencia al tráfico",
        "Secado acelerado",
      ],
      image: "/esmaltes.jpg",
      color: "from-red-500 to-red-600",
    },
    {
      id: 5,
      name: "Anticorrosivos",
      category: "Especialidad",
      description:
        "Protección anticorrosiva para estructuras metálicas en ambientes industriales y marinos.",
      features: [
        "Protección contra corrosión",
        "Resistencia marina",
        "Adherencia en metal",
        "Larga vida útil",
        "Múltiples capas opcionales",
      ],
      image: "/anticorresivos.jpg",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section
      id="products"
      className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Línea completa de pinturas, vinilos y esmaltes de la más alta
            calidad para todos tus proyectos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeProduct === index
                  ? "border-accent bg-white dark:bg-slate-800"
                  : "border-transparent bg-white dark:bg-slate-800 hover:border-accent/50"
              }`}
            >
              <p className="font-semibold text-foreground text-sm">
                {product.name}
              </p>
              <p className="text-xs text-muted mt-1">{product.category}</p>
            </button>
          ))}
        </div>

        {/* Product Detail */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Image */}
            <div
              className={`rounded-xl overflow-hidden h-80 bg-gradient-to-br ${products[activeProduct].color} flex items-center justify-center`}
            >
              <img
                src={products[activeProduct].image || "/placeholder.svg"}
                alt={products[activeProduct].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-accent font-semibold text-sm mb-2">
                  {products[activeProduct].category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {products[activeProduct].name}
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  {products[activeProduct].description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Características Principales
                </h4>
                <ul className="space-y-3">
                  {products[activeProduct].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors">
                  Solicitar Información
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Certificado
            </h4>
            <p className="text-muted">
              Todos nuestros productos cumplen con estándares internacionales de
              calidad y regulaciones locales.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Garantía</h4>
            <p className="text-muted">
              Garantía completa en todos nuestros productos con respaldo técnico
              profesional.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              Rendimiento
            </h4>
            <p className="text-muted">
              Máxima cobertura y durabilidad para garantizar los mejores
              resultados en tus proyectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
