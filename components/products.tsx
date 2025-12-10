"use client";

import { useState, useEffect, useRef } from "react";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState({
    header: false,
    products: false,
    detail: false,
    info: false,
  });

  const headerRef = useRef(null);
  const productsRef = useRef(null);
  const detailRef = useRef(null);
  const infoRef = useRef(null);

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
      { ref: headerRef, name: "header" },
      { ref: productsRef, name: "products" },
      { ref: detailRef, name: "detail" },
      { ref: infoRef, name: "info" },
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
        <div
          ref={headerRef}
          data-ref="header"
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible.header
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Línea completa de pinturas, vinilos y esmaltes de la más alta
            calidad para todos tus proyectos.
          </p>
        </div>

        {/* Products Grid */}
        <div
          ref={productsRef}
          data-ref="products"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        >
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`p-4 rounded-lg border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                activeProduct === index
                  ? "border-accent bg-white dark:bg-slate-800 scale-105 shadow-lg"
                  : "border-transparent bg-white dark:bg-slate-800 hover:border-accent/50"
              } ${
                isVisible.products
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible.products ? `${index * 100}ms` : "0ms",
              }}
            >
              <p className="font-semibold text-foreground text-sm">
                {product.name}
              </p>
              <p className="text-xs text-muted mt-1">{product.category}</p>
            </button>
          ))}
        </div>

        {/* Product Detail */}
        <div
          ref={detailRef}
          data-ref="detail"
          className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-border transition-all duration-1000 transform ${
            isVisible.detail
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Image */}
            <div
              className={`rounded-xl overflow-hidden h-80 bg-gradient-to-br ${products[activeProduct].color} flex items-center justify-center transition-all duration-700 transform hover:scale-105 hover:shadow-2xl`}
              key={`image-${activeProduct}`}
            >
              <img
                src={products[activeProduct].image || "/placeholder.svg"}
                alt={products[activeProduct].name}
                className="w-full h-full object-cover transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div
              className="space-y-6"
              key={`content-${activeProduct}`}
            >
              <div className="transition-all duration-500 transform">
                <p className="text-accent font-semibold text-sm mb-2 animate-pulse">
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
                    <li
                      key={idx}
                      className="flex items-center gap-3 transition-all duration-500 transform hover:translate-x-2"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Solicitar Información
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          ref={infoRef}
          data-ref="info"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
              title: "Certificado",
              description:
                "Todos nuestros productos cumplen con estándares internacionales de calidad y regulaciones locales.",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              ),
              title: "Garantía",
              description:
                "Garantía completa en todos nuestros productos con respaldo técnico profesional.",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
              title: "Rendimiento",
              description:
                "Máxima cobertura y durabilidad para garantizar los mejores resultados en tus proyectos.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 p-8 rounded-xl border border-border transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${
                isVisible.info
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible.info ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-accent/20">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}