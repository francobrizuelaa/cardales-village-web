"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

export function MasterplanSection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7C272C] mb-3 font-medium">Distribucion</p>
          <h2 className="text-3xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">Masterplan del Barrio</h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">
            Descubri la distribucion inteligente de nuestro barrio, diseñado para maximizar la privacidad, la seguridad
            y el contacto con la naturaleza.
          </p>
        </div>

        {/* Masterplan Principal - Full Width */}
        <div className="max-w-6xl mx-auto mb-12">
          <div 
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => setLightboxImage("/images/masterplan.jpeg")}
          >
            <Image
              src="/images/masterplan.jpeg"
              alt="Masterplan de Cardales Village - Mapa de lotes y amenities"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-stone-800 px-4 py-2 rounded-lg font-medium text-sm">
                Click para ampliar
              </span>
            </div>
          </div>
        </div>

        {/* Info Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="text-2xl lg:text-3xl font-bold text-[#7C272C] mb-1">+300</div>
              <div className="text-stone-600 font-medium text-sm lg:text-base">Lotes</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="text-2xl lg:text-3xl font-bold text-[#7C272C] mb-1">45%</div>
              <div className="text-stone-600 font-medium text-sm lg:text-base">Espacios Verdes</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-stone-100">
              <div className="text-2xl lg:text-3xl font-bold text-[#7C272C] mb-1">24hs</div>
              <div className="text-stone-600 font-medium text-sm lg:text-base">Seguridad</div>
            </div>
          </div>
        </div>

        {/* Mapa de Ubicacion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-stone-800 tracking-tight">Como Llegar</h3>
            <p className="text-stone-500 mt-2">Ruta 4, Km 5.5 | Los Cardales | Buenos Aires</p>
          </div>
          <div 
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => setLightboxImage("/images/master.jpeg")}
          >
            <Image
              src="/images/master.jpeg"
              alt="Mapa de ubicacion y accesos a Cardales Village"
              width={800}
              height={800}
              className="w-full h-auto object-contain max-h-[500px] mx-auto"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-stone-800 px-4 py-2 rounded-lg font-medium text-sm">
                Click para ampliar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-stone-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={lightboxImage}
            alt="Imagen ampliada"
            width={1600}
            height={1000}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
