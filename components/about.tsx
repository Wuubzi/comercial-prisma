export default function About() {
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
    <section id="about" className="bg-white dark:bg-slate-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
          <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-blue-400 to-orange-400">
            <img
              src="/somos.png"
              alt="Oficina Comercial Prisma"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              10+
            </p>
            <p className="text-foreground font-semibold">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              500+
            </p>
            <p className="text-foreground font-semibold">
              Clientes Satisfechos
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
              100%
            </p>
            <p className="text-foreground font-semibold">Calidad Garantizada</p>
          </div>
          <div className="text-center">
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
