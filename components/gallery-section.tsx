"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Maximize2, X } from "lucide-react"
import Image from "next/image"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("todas")

  const categories = [
    { id: "todas", label: "Todas" },
    { id: "aereas", label: "Vistas Aéreas" },
    { id: "amenities", label: "Amenities" },
    { id: "naturaleza", label: "Naturaleza" },
    { id: "casas", label: "Residencias" },
  ]

  const images = [
    /*
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Vista aérea del barrio",
      category: "aereas",
    },
    */
    {
      src: "/images/pileta.jpg",
      alt: "Piscina principal",
      category: "amenities",
    },
    /*
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Parque central",
      category: "naturaleza",
    },
    */
    {
      src: "/images/tenis.jpg",
      alt: "Cancha de tenis",
      category: "aereas",
    },
    {
      src: "/images/piletahouse.jpg",
      alt: "Club house",
      category: "amenities",
    },
    /*
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Atardecer en el barrio",
      category: "naturaleza",
    },
    */
    /*
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Acceso principal",
      category: "aereas",
    },
    */
    {
      src: "/images/futbol.jpg",
      alt: "Cancha de futbol",
      category: "aereas",
    },
    /*
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Gimnasio",
      category: "amenities",
    },
    */
  ]

  const filteredImages = activeCategory === "todas" ? images : images.filter((img) => img.category === activeCategory)

  return (
    <section id="galeria" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7C272C] mb-3 font-medium">Imagenes</p>
          <h2 className="text-3xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">Galeria</h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">
            Explorá la belleza y elegancia de Cardales Village a través de nuestra colección de imágenes que capturan la
            esencia de nuestro barrio.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-[#7C272C] hover:bg-[#8B2F34]"
                  : "border-stone-300 text-stone-600 hover:bg-stone-100"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-stone-700 font-medium">{image.alt}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Imagen ampliada"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}