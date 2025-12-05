"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="bg-white dark:bg-slate-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contacto</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            ¿Tienes preguntas? Nuestro equipo está disponible para ayudarte. Contáctanos en cualquier momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Teléfono</h3>
            <p className="text-muted mb-2">+57 (5) 300-123-4567</p>
            <p className="text-sm text-muted">Disponible de lunes a viernes</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted mb-2">info@comercialprisma.com</p>
            <p className="text-sm text-muted">Respuesta en 24 horas</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Ubicación</h3>
            <p className="text-muted mb-2">Barranquilla, Colombia</p>
            <p className="text-sm text-muted">Zona industrial centro</p>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+57 (5) 300-123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o pregunta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors"
              >
                Enviar Mensaje
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-100 font-semibold">
                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">¿Por qué elegirnos?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">Respuesta rápida a tus consultas en menos de 24 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">Equipo especializado con asesoría técnica profesional</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">Soluciones personalizadas para tus necesidades específicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">Promociones especiales para clientes mayoristas</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock size={20} className="text-accent" />
                Horario de Atención
              </h4>
              <div className="space-y-2 text-muted">
                <p>
                  <span className="font-semibold text-foreground">Lunes - Viernes:</span> 8:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-foreground">Sábado:</span> 9:00 AM - 2:00 PM
                </p>
                <p>
                  <span className="font-semibold text-foreground">Domingo:</span> Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
