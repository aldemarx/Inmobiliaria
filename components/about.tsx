import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Más de 10 años de experiencia en el sector",
  "Equipo de profesionales altamente calificados",
  "Compromiso con la calidad y la excelencia",
  "Uso de materiales de primera calidad",
  "Cumplimiento de plazos y presupuestos",
  "Atención personalizada a cada cliente",
]

export default function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-gray-600 mb-6">
              Arena Blanca Construcciones es una empresa peruana dedicada a la construcción, remodelación y acabados de
              proyectos residenciales y comerciales. Desde nuestra fundación, nos hemos comprometido a ofrecer servicios
              de la más alta calidad, cumpliendo con los estándares más exigentes del mercado.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo está formado por profesionales con amplia experiencia en el sector, lo que nos permite
              garantizar resultados excepcionales en cada uno de nuestros proyectos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Equipo de Arena Blanca Construcciones"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-2xl font-bold">+10</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

