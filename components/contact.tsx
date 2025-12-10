"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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
  const [isVisible, setIsVisible] = useState({
    header: false,
    cards: false,
    form: false,
    info: false,
  });

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const formRef = useRef(null);
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
      { ref: cardsRef, name: "cards" },
      { ref: formRef, name: "form" },
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

  const contactCards = [
    {
      icon: Phone,
      title: "Teléfono",
      main: "+57 (5) 300-123-4567",
      sub: "Disponible de lunes a viernes",
    },
    {
      icon: Mail,
      title: "Email",
      main: "info@comercialprisma.com",
      sub: "Respuesta en 24 horas",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      main: "Barranquilla, Colombia",
      sub: "Zona industrial centro",
    },
  ];

  return (
    <section id="contact" className="bg-white dark:bg-slate-950 py-16 md:py-24">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contacto</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            ¿Tienes preguntas? Nuestro equipo está disponible para ayudarte. Contáctanos en cualquier momento.
          </p>
        </div>

        <div
          ref={cardsRef}
          data-ref="cards"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Contact Info Cards */}
          {contactCards.map((card, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl hover:border-accent ${
                isVisible.cards
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible.cards ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-accent/20">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted mb-2">{card.main}</p>
              <p className="text-sm text-muted">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div
            ref={formRef}
            data-ref="form"
            className={`transition-all duration-1000 transform ${
              isVisible.form
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="transition-all duration-500 hover:scale-105">
                <label className="block text-sm font-semibold text-foreground mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="transition-all duration-500 hover:scale-105">
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="transition-all duration-500 hover:scale-105">
                <label className="block text-sm font-semibold text-foreground mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="+57 (5) 300-123-4567"
                />
              </div>

              <div className="transition-all duration-500 hover:scale-105">
                <label className="block text-sm font-semibold text-foreground mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="transition-all duration-500 hover:scale-105">
                <label className="block text-sm font-semibold text-foreground mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white dark:bg-slate-900 text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all duration-300"
                  placeholder="Cuéntanos sobre tu proyecto o pregunta..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Enviar Mensaje
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg animate-pulse">
                  <p className="text-green-800 dark:text-green-100 font-semibold">
                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info & Hours */}
          <div
            ref={infoRef}
            data-ref="info"
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible.info
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 p-8 rounded-xl border border-border transition-all duration-500 hover:shadow-xl hover:scale-105">
              <h3 className="text-2xl font-bold text-foreground mb-6">¿Por qué elegirnos?</h3>
              <ul className="space-y-4">
                {[
                  "Respuesta rápida a tus consultas en menos de 24 horas",
                  "Equipo especializado con asesoría técnica profesional",
                  "Soluciones personalizadas para tus necesidades específicas",
                  "Promociones especiales para clientes mayoristas",
                ].map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 transform hover:translate-x-2 ${
                      isVisible.info ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible.info ? `${200 + index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5 animate-pulse">
                      ✓
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-border transition-all duration-700 transform hover:shadow-xl hover:scale-105 ${
                isVisible.info ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: isVisible.info ? "600ms" : "0ms" }}
            >
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock size={20} className="text-accent animate-spin" style={{ animationDuration: "8s" }} />
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