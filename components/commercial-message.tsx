export default function CommercialMessage() {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trust */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Confianza Garantizada</h3>
            <p className="text-muted text-sm">
              Más de 10 años distribuyendo productos de la más alta calidad con respaldo técnico profesional.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Rendimiento Superior</h3>
            <p className="text-muted text-sm">
              Pinturas con alta cobertura, durabilidad extendida y acabados profesionales que superan expectativas.
            </p>
          </div>

          {/* Support */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Asesoría Experta</h3>
            <p className="text-muted text-sm">
              Equipo especializado disponible para brindarte soluciones personalizadas y recomendaciones técnicas.
            </p>
          </div>
        </div>

        {/* Main message */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 rounded-2xl p-8 md:p-12 border border-border">
          <div className="max-w-3xl">
            <p className="text-lg md:text-2xl font-semibold text-foreground mb-4">
              Distribuidores exclusivos de As Pinturas en Barranquilla
            </p>
            <p className="text-muted text-lg">
              Color, rendimiento y calidad para tus proyectos. Nos especializamos en pinturas de tráfico, vinilos,
              esmaltes y soluciones anticorrosivas diseñadas para ofrecer durabilidad, rendimiento y resultados
              profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
