import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 ">
                <img src="/log.png" alt="" />
              </div>
              <h3 className="font-bold text-lg">Comercial Prisma</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Distribuidor exclusivo de As Pinturas. Tu aliado en color, calidad
              y construcción.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="#hero"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Inicio <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Quiénes Somos <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Productos <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  Contacto <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Productos</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-accent transition-colors cursor-pointer">
                Pinturas de Tráfico
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                Vinilos Tipo 1
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                Vinilos Tipo 2
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                Esmaltes
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                Anticorrosivos
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+573001234567">+57 (5) 300-123-4567</a>
              </li>
              <li className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@comercialprisma.com">
                  info@comercialprisma.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>Barranquilla, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          {/* Social Links */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-4">
              <a
                href="#facebook"
                className="w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-slate-800 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-slate-400">
              © {currentYear} Comercial Prisma. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-center border border-slate-700">
          <p className="text-sm text-slate-300 mb-3">
            ¿Necesitas ayuda con tu proyecto?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors"
          >
            Solicita una consulta
          </a>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>
            Diseñado para potenciar tu negocio | Soluciones de pintura de clase
            mundial
          </p>
        </div>
      </div>
    </footer>
  );
}
