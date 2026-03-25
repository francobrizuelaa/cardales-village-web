import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-el-barrio", label: "Sobre el Barrio" },
    { href: "#galeria", label: "Galeria" },
    { href: "#ubicacion", label: "Ubicacion" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/images/cardales-village-logo.png"
              alt="Cardales Village"
              width={64}
              height={64}
              className="size-16 object-contain mb-5"
            />
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs">
              Barrio privado en Los Cardales, Buenos Aires. Seguridad, naturaleza y comunidad en un solo lugar.
            </p>
          </div>

          {/* Column 2 — Links rapidos */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Links Rapidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:administracion@cardalesvillage.com.ar"
                  className="flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  administracion@cardalesvillage.com.ar
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cardalesvillage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors"
                >
                  {/* Instagram icon (inline svg for consistency without emoji) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 flex-shrink-0"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  @cardalesvillage
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-stone-500">
            {currentYear} Cardales Village. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Terminos y Condiciones
            </Link>
            <Link href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
