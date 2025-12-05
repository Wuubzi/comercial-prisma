import Link from "next/link"

export default function CTASection() {
  return (
    <section className="bg-primary text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas asesoría sobre nuestros productos?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu proyecto.
        </p>
        <Link
          href="#contact"
          className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-lg"
        >
          Habla con nuestro equipo
        </Link>
      </div>
    </section>
  )
}
