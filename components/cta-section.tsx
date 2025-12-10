"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    };

    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-primary text-white py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute bottom-10 left-20 w-96 h-96 bg-accent rounded-full blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-50'
        }`} style={{ transitionDelay: '200ms' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          ¿Necesitas asesoría sobre nuestros productos?
        </h2>
        
        <p 
          className={`text-xl text-blue-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu proyecto.
        </p>
        
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 text-lg hover:scale-110 hover:shadow-2xl relative group overflow-hidden"
          >
            <span className="relative z-10">Habla con nuestro equipo</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Decorative elements */}
        <div 
          className={`flex justify-center gap-8 mt-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {[
            { icon: "📞", text: "Respuesta rápida" },
            { icon: "👨‍💼", text: "Expertos certificados" },
            { icon: "💡", text: "Soluciones personalizadas" }
          ].map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center gap-2 transition-all duration-500 transform hover:scale-110 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="text-3xl animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                {item.icon}
              </div>
              <p className="text-sm text-blue-100 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}