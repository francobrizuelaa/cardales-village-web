import { Card, CardContent } from "@/components/ui/card"
import { Shield, Leaf, Home, Users, Car, Waves } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Premium",
      description: "Vigilancia 24 horas, acceso controlado y sistema de monitoreo integral",
    },
    {
      icon: Leaf,
      title: "Entorno Natural",
      description: "Amplios espacios verdes, arboleda nativa y diseño paisajístico",
    },
    {
      icon: Home,
      title: "Lotes Exclusivos",
      description: "Terrenos de 800m² a 2000m² con servicios de primera calidad",
    },
    {
      icon: Users,
      title: "Comunidad Selecta",
      description: "Ambiente familiar y vecinos que comparten valores similares",
    },
    {
      icon: Car,
      title: "Accesibilidad",
      description: "Fácil acceso desde Panamericana y cercanía a centros urbanos",
    },
    {
      icon: Waves,
      title: "Amenities Premium",
      description: "Club house, piscina, canchas deportivas y espacios recreativos",
    },
  ]

  return (
    <section id="sobre-el-barrio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content - Todo unificado en un contenedor burgundy */}
        <div className="mb-20">
          <div className="bg-[#7C272C]/10 rounded-3xl p-8 lg:p-14 border border-[#7C272C]/20 shadow-sm">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.25em] text-[#7C272C] mb-3 font-medium">Quiénes Somos</p>
              <h2 className="text-3xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">Sobre Cardales Village</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Desde 1998, nos hemos consolidado como uno de los barrios privados más elegidos de la zona norte, ofreciendo un estilo de vida único que combina tranquilidad, seguridad y exclusividad.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-[1px] w-16 bg-[#7C272C]/30" />
              <div className="w-2 h-2 rounded-full bg-[#7C272C]" />
              <div className="h-[1px] w-16 bg-[#7C272C]/30" />
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-light text-stone-800 mb-6 tracking-tight">Una Comunidad Excepcional</h3>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Fundado en 1998, Cardales Village se ha consolidado como uno de los barrios privados más tradicionales y familiares del corredor Los Cardales - Río Luján. Con una ubicación estratégica sobre la Ruta Provincial N° 4 (Km 5.5), ofrece un acceso rápido y directo desde Panamericana, a tan solo 5 minutos del pintoresco casco urbano del pueblo.
                  </p>
                  <p>
                    Nuestro masterplan abarca 50 hectáreas de naturaleza, divididas armónicamente en 386 lotes que van desde los 600 m² hasta los 1.100 m². El paisaje del barrio se distingue por su cuidada forestación y el diseño sinuoso de sus calles, creando un entorno de absoluta tranquilidad donde el centenar de casas construidas nos eligen, en su gran mayoría, como vivienda permanente.
                  </p>
                  <p>
                    Más que un lugar para vivir, ofrecemos una infraestructura integral pensada para el confort diario. Somos de los pocos barrios en la zona que cuenta con todos los servicios (gas natural, agua potable, red de cloacas con planta de tratamiento propia), sumado a un completo sector deportivo, Club House, y vigilancia estricta las 24 horas.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 lg:order-2">
                <Image
                  src="/images/principal.jpeg"
                  alt="Entrada principal de Cardales Village"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid with enhanced cards */}
        <div className="relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-30 -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C272C]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C272C]/5 rounded-full blur-3xl" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-stone-200 bg-white/80 backdrop-blur-sm hover:border-[#7C272C]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#7C272C]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7C272C]/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-[#7C272C]" />
                  </div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-4">{feature.title}</h4>
                  <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}