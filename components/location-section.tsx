import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Clock, Navigation } from "lucide-react"

export function LocationSection() {
  const accessRoutes = [
    {
      icon: Car,
      title: "Desde Capital Federal",
      description: "Panamericana hasta Km 60, salida Cardales",
      time: "45 minutos",
    },
    {
      icon: Navigation,
      title: "Desde Zona Norte",
      description: "Acceso directo por Ruta 9 (Panamericana)",
      time: "30 minutos",
    },
    {
      icon: Clock,
      title: "Desde Pilar",
      description: "Subí a Panamericana (Ramal Campana), bajá en Ruta 4 hacia Los Cardales.",
      time: "20 minutos",
    },
  ]

  const nearbyPlaces = [
    { name: "Centro Comercial Cardales", distance: "2 km" },
    { name: "Colegio San Patricio", distance: "3 km" },
    { name: "Hospital Austral", distance: "15 km" },
    { name: "Shopping Unicenter", distance: "25 km" },
    { name: "Aeropuerto Ezeiza", distance: "60 km" },
    { name: "Puerto Madero", distance: "65 km" },
  ]

  return (
    <section id="ubicacion" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7C272C] mb-3 font-medium">Como Llegar</p>
          <h2 className="text-3xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">Ubicacion Privilegiada</h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">
            Estrategicamente ubicado en Cardales, con facil acceso a las principales vias de comunicacion y cerca de
            todos los servicios que necesitas.
          </p>
        </div>

        {/* Map and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map — responsive aspect ratio */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-3 overflow-hidden">
              {/* Replace the src below with your actual Google Maps embed URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13388.288015468568!2d-58.955023749999995!3d-34.3102817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb7b3d44486e57%3A0xe7cfac04ebae39b4!2sCardales%20Village%20Club%20SA%20(Barrio%20Privado)!5e1!3m2!1ses!2sar!4v1772738163801!5m2!1ses!2sar"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion de Cardales Village en Google Maps"
                className="rounded-lg w-full aspect-square lg:aspect-video shadow-sm"
              />
            </div>
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7C272C]" />
                <div>
                  <div className="font-semibold text-stone-800 text-sm">Cardales Village</div>
                  <div className="text-xs text-stone-500">Cardales, Buenos Aires</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div>
            <h3 className="text-2xl font-light text-stone-800 mb-8 tracking-tight">Accesos y Rutas</h3>
            <div className="space-y-4">
              {accessRoutes.map((route, index) => (
                <Card key={index} className="border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#7C272C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <route.icon className="w-5 h-5 text-[#7C272C]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-stone-800 mb-1 text-sm">{route.title}</h4>
                        <p className="text-stone-500 text-sm mb-1">{route.description}</p>
                        <span className="text-xs text-[#7C272C] font-medium">Aprox. {route.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button className="w-full bg-[#7C272C] hover:bg-[#8B2F34] text-white" asChild>
                <a
                  href="https://www.google.com/maps/search/Cardales+Village"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir en Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Nearby Places 
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-medium text-stone-800 mb-6 text-center tracking-tight">
            Lugares de Interes Cercanos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                <span className="text-stone-600 text-sm">{place.name}</span>
                <span className="text-[#7C272C] font-semibold text-sm">{place.distance}</span>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  )
}
