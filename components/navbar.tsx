"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-el-barrio", label: "Sobre el Barrio" },
    { href: "#galeria", label: "Galeria" },
    { href: "#ubicacion", label: "Ubicacion" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24 relative">
          {/* Logo (Izquierda) */}
          <Link href="/" className="flex items-center z-10">
            <Image
              src="/images/cardales-village-logo.png"
              alt="Cardales Village"
              width={56}
              height={56}
              className="size-12 lg:size-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation (Centro perfecto) */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-700 hover:text-[#7C272C] transition-colors font-medium text-lg"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botón Desktop & Menú Mobile (Derecha) */}
          <div className="flex items-center z-10">
            <Link href="#contacto" className="hidden lg:block">
              <Button className="bg-[#7C272C] hover:bg-[#8B2F34] text-white px-6 py-3 text-lg">Contactar</Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ml-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-stone-700 hover:text-[#7C272C] hover:bg-stone-50 transition-colors text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#7C272C] hover:bg-[#8B2F34] text-white py-3 text-lg">Contactar</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}