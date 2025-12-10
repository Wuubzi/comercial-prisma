"use client"

import { useState, useEffect, useRef } from "react"

export default function CommercialMessage() {
  const [isVisible, setIsVisible] = useState({
    cards: false,
    message: false,
  });

  const cardsRef = useRef(null);
  const messageRef = useRef(null);

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
      { ref: cardsRef, name: "cards" },
      { ref: messageRef, name: "message" },
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

  const cards = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "Confianza Garantizada",
      description:
        "Más de 10 años distribuyendo productos de la más alta calidad con respaldo técnico profesional.",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      title: "Rendimiento Superior",
      description:
        "Pinturas con alta cobertura, durabilidad extendida y acabados profesionales que superan expectativas.",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
      title: "Asesoría Experta",
      description:
        "Equipo especializado disponible para brindarte soluciones personalizadas y recomendaciones técnicas.",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardsRef}
          data-ref="cards"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:border-accent ${
                isVisible.cards
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible.cards ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-accent/20">
                <svg
                  className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Main message */}
        <div
          ref={messageRef}
          data-ref="message"
          className={`mt-16 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden transition-all duration-1000 transform hover:shadow-2xl ${
            isVisible.message
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative max-w-3xl">
            <p
              className={`text-lg md:text-2xl font-semibold text-foreground mb-4 transition-all duration-700 transform ${
                isVisible.message
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Distribuidores exclusivos de As Pinturas en Barranquilla
            </p>
            <p
              className={`text-muted text-lg transition-all duration-700 transform ${
                isVisible.message
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Color, rendimiento y calidad para tus proyectos. Nos especializamos en pinturas de tráfico, vinilos,
              esmaltes y soluciones anticorrosivas diseñadas para ofrecer durabilidad, rendimiento y resultados
              profesionales.
            </p>
          </div>

          {/* Decorative corner accent */}
          <div
            className={`absolute bottom-4 right-4 transition-all duration-700 transform ${
              isVisible.message ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="w-16 h-16 border-4 border-accent/20 rounded-full animate-spin" style={{ animationDuration: "8s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}