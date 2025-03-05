"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto. Contáctanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-secondary mb-6">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Construcción">Construcción</option>
                    <option value="Remodelación">Remodelación</option>
                    <option value="Acabados">Acabados</option>
                    <option value="Consulta">Consulta General</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-md transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div>
            <div className="bg-secondary text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Teléfono</p>
                    <p>+51 123 456 789</p>
                    <p>+51 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Correo Electrónico</p>
                    <p>info@arenablancaconstrucciones.com.pe</p>
                    <p>ventas@arenablancaconstrucciones.com.pe</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Dirección</p>
                    <p>Av. Principal 123, Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-6">Horario de Atención</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábados:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

