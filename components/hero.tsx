import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">ARENA BLANCA CONSTRUCCIONES</h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Construimos tus sueños con calidad y compromiso. Especialistas en proyectos de construcción, remodelación y
          acabados.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contacto"
            className="bg-primary hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Contáctanos
          </Link>
          <Link
            href="#proyectos"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Ver Proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}

