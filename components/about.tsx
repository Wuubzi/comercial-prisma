"use client"
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState({
    header: false,
    image: false,
    text: false,
    values: false,
    stats: false,
  });

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);

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
      { ref: imageRef, name: "image" },
      { ref: textRef, name: "text" },
      { ref: valuesRef, name: "values" },
      { ref: statsRef, name: "stats" },
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

  const values = [
    {
      title: "Especialización",
      description:
        "Expertos en productos de alto rendimiento para mantenimiento, señalización y embellecimiento.",
    },
    {
      title: "Durabilidad",
      description:
        "Pinturas y esmaltes diseñados para resistir condiciones extremas y mantener su calidad.",
    },
    {
      title: "Asesoría Técnica",
      description:
        "Equipo especializado con respaldo profesional para proyectos de cualquier escala.",
    },
    {
      title: "Cumplimiento",
      description:
        "Compromiso con estándares de calidad internacionales y entregas puntuales garantizadas.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white dark:bg-slate-950 py-16 md:py-24"
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
            Quiénes Somos
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Comercial Prisma es una comercializadora especializada con más de
            una década de experiencia en distribución de productos de
            construcción y acabados.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            data-ref="image"
            className={`rounded-xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-blue-400 to-orange-400 transition-all duration-1000 transform hover:scale-105 hover:shadow-2xl ${
              isVisible.image
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <img
              src="/somos.png"
              alt="Oficina Comercial Prisma"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div
            ref={textRef}
            data-ref="text"
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible.text
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nuestra Misión
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Ser el distribuidor de referencia de productos de alto
                rendimiento en la región, ofreciendo soluciones profesionales
                que combinen calidad, precio competitivo y asesoría técnica
                confiable. Trabajamos con pinturas de tráfico, vinilos, esmaltes
                y soluciones anticorrosivas diseñadas para ofrecer durabilidad,
                rendimiento y resultados profesionales.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nuestro Valor
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                Somos el aliado ideal para contratistas, empresas constructoras
                y clientes particulares que buscan calidad, cumplimiento y
                asesoría técnica confiable. Cada producto es cuidadosamente
                seleccionado para garantizar que nuestros clientes reciban lo
                mejor del mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div
          ref={valuesRef}
          data-ref="values"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border hover:border-accent transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${
                isVisible.values
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: isVisible.values ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <div className="w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          data-ref="stats"
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border transition-all duration-1000 transform ${
            isVisible.stats
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <div
            className={`text-center transition-all duration-700 transform hover:scale-110 ${
              isVisible.stats ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ transitionDelay: isVisible.stats ? "100ms" : "0ms" }}
          >
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              10+
            </p>
            <p className="text-foreground font-semibold">Años de Experiencia</p>
          </div>
          <div
            className={`text-center transition-all duration-700 transform hover:scale-110 ${
              isVisible.stats ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ transitionDelay: isVisible.stats ? "250ms" : "0ms" }}
          >
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              500+
            </p>
            <p className="text-foreground font-semibold">
              Clientes Satisfechos
            </p>
          </div>
          <div
            className={`text-center transition-all duration-700 transform hover:scale-110 ${
              isVisible.stats ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ transitionDelay: isVisible.stats ? "400ms" : "0ms" }}
          >
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              100%
            </p>
            <p className="text-foreground font-semibold">Calidad Garantizada</p>
          </div>
          <div
            className={`text-center transition-all duration-700 transform hover:scale-110 ${
              isVisible.stats ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ transitionDelay: isVisible.stats ? "550ms" : "0ms" }}
          >
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              24/7
            </p>
            <p className="text-foreground font-semibold">Disponibilidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}