"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "5491123456789"
  const defaultMessage =
    "Hola! Me interesa conocer mas sobre Cardales Village. Podrian brindarme informacion?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* Floating WhatsApp Button with pulse */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping pointer-events-none" />
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
          aria-label={isOpen ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* WhatsApp Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-green-500 text-white px-5 py-4">
            <h4 className="font-semibold text-sm">Hablemos por WhatsApp</h4>
            <p className="text-xs text-white/80 mt-0.5">Te respondemos al instante</p>
          </div>
          <div className="p-5">
            <p className="text-stone-600 text-sm mb-4 leading-relaxed">
              Tenes consultas sobre Cardales Village? Escribinos y te asesoramos sobre lotes disponibles, precios y
              financiacion.
            </p>
            <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white text-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Iniciar Conversacion
            </Button>
            <p className="text-xs text-stone-400 text-center mt-3">
              Lun a Vie 9-18hs | Sab 10-16hs
            </p>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
