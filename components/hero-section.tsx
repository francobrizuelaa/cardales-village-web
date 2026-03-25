"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Shield, Users } from "lucide-react"

import { Playfair_Display } from "next/font/google"



const playfair = Playfair_Display({ subsets: ["latin"] })
export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/segundodron.MP4"
          className="absolute inset-0 w-full h-full object-cover -z-10 object-bottom"
        >
          {/* Replace the src below with your actual video file */}
          <source src="/videos/segundodron.MP4" type="video/mp4" />
        </video>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 mb-4 font-medium">
            Barrio Privado en Los Cardales
          </p>
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight text-balance ${playfair.className}`}>
          CARDALES VILLAGE CLUB
          </h1>
        { /* <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Descubri la tranquilidad y elegancia de vivir en una comunidad privada rodeada de naturaleza, con la
            seguridad y comodidades que tu familia merece.
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-[#7C272C] hover:bg-[#8B2F34] text-white px-8 py-3 text-base tracking-wide"
              asChild
            >
              <a href="#contacto">Conoce el Barrio</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-stone-800 px-8 py-3 text-base bg-white/5 backdrop-blur-sm tracking-wide"
              asChild
            >
              <a href="#sobre-el-barrio">Mas Informacion</a>
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Shield className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
              <span className="text-sm font-medium">Seguridad 24hs</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
              <span className="text-sm font-medium">Ubicacion Premium</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Users className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
              <span className="text-sm font-medium">Comunidad Exclusiva</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
