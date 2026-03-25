import { Card, CardContent } from "@/components/ui/card"
import { Shield, Home, Dumbbell, TreePine } from "lucide-react"

export function AmenitiesSection() {
  const amenities = [
    {
      icon: Shield,
      title: "Seguridad 24hs",
      description:
        "Garita de acceso permanente, circuito cerrado de camaras y rondas de vigilancia durante las 24 horas.",
    },
    {
      icon: Home,
      title: "Club House",
      description:
        "Salon de eventos con capacidad completa, cocina equipada y vista al parque central del barrio.",
    },
    {
      icon: Dumbbell,
      title: "Deportes",
      description:
        "Cancha de futbol, tenis, area de juegos y gimnasio para toda la familia.",
    },
    {
      icon: TreePine,
      title: "Espacios Verdes",
      description:
        "Mas del 45% del barrio destinado a parques, senderos arbolados y plazas de encuentro con paisajismo nativo.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7C272C] mb-3 font-medium">Servicios</p>
          <h2 className="text-3xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">Amenities del Barrio</h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">
            Instalaciones pensadas para el bienestar y la recreacion de toda la familia.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className="border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-[#7C272C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7C272C] transition-colors duration-300">
                  <amenity.icon className="w-7 h-7 text-[#7C272C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-stone-800 mb-3">{amenity.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
