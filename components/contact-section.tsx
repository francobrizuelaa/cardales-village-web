"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+54 11 2345-6789",
      action: "tel:+541123456789",
    },
    {
      icon: Mail,
      title: "Email",
      content: "Administracion@cardalesvillageclub.com.ar",
      action: "mailto:Administracion@cardalesvillageclub.com.ar",
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Ruta 4, Km 5.5\nCardales, Buenos Aires",
      action: "#ubicacion",
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      content: "Lunes a Viernes: 9:00 - 18:00\nSábados: 10:00 - 16:00",
      action: null,
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7C272C] mb-3 font-medium">Escribinos</p>
          <h2 className="text-3xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">Contactanos</h2>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para responder todas tus consultas y ayudarte a encontrar tu lugar ideal en Cardales Village.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-stone-800 mb-6 tracking-tight">Envianos tu Consulta</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-stone-300 focus:border-[#7C272C] focus:ring-[#7C272C]"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-stone-300 focus:border-[#7C272C] focus:ring-[#7C272C]"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-stone-300 focus:border-[#7C272C] focus:ring-[#7C272C]"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-stone-300 focus:border-[#7C272C] focus:ring-[#7C272C]"
                      placeholder="Contanos sobre tu interés en Cardales Village, qué tipo de lote buscás, cuándo te gustaría visitarnos, etc."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#7C272C] hover:bg-[#8B2F34] text-white py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-stone-800 mb-6 tracking-tight">Informacion de Contacto</h3>

            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#7C272C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#7C272C]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-stone-800 mb-2">{info.title}</h4>
                      <p className="text-stone-600 whitespace-pre-line">{info.content}</p>
                      {info.action && (
                        <a
                          href={info.action}
                          className="inline-block mt-2 text-[#7C272C] hover:text-[#8B2F34] font-medium text-sm"
                        >
                          {info.action.startsWith("tel:")
                            ? "Llamar ahora"
                            : info.action.startsWith("mailto:")
                              ? "Enviar email"
                              : "Ver ubicación"}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-stone-800 mb-4">Seguinos en Redes Sociales</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/cardalesvillage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#7C272C]/10 rounded-full flex items-center justify-center text-[#7C272C] hover:bg-[#7C272C] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
