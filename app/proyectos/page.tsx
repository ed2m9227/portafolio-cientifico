import Link from "next/link"
import { proyectos } from "@/lib/proyectos"

type EstadoProyecto = "Idea" | "En desarrollo" | "MVP"

interface ProyectoAgrupado {
  id: string
  slug: string
  titulo: string
  area: string
  descripcion: string
  estado: EstadoProyecto
  enlace?: string
}

const estadoConfig = {
  "MVP": {
    label: "MVP Disponible",
    badge: "✓ Disponible",
    color: "border-green-900 bg-green-950/20",
    badgeColor: "bg-green-950 text-green-300"
  },
  "En desarrollo": {
    label: "En Desarrollo",
    badge: "⚙ En progreso",
    color: "border-blue-900 bg-blue-950/20",
    badgeColor: "bg-blue-950 text-blue-300"
  },
  "Idea": {
    label: "Fase Concepto",
    badge: "💡 Concepto",
    color: "border-purple-900 bg-purple-950/20",
    badgeColor: "bg-purple-950 text-purple-300"
  }
}


export default function ProyectosPage() {
  // Agrupar proyectos por estado
  const proyectosAgrupados = (Object.keys(estadoConfig) as EstadoProyecto[]).reduce((acc, estado) => {
    acc[estado] = proyectos.filter((p) => p.estado === estado)
    return acc
  }, {} as Record<EstadoProyecto, ProyectoAgrupado[]>)

  return (
    <main className="relative min-h-screen text-[#e6e8eb] px-6 py-20 overflow-hidden">
      {/* Fondo bio-02 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f1115]" />
        <div className="bg-bio-02 absolute inset-y-0 right-0 w-1/3 opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-0">
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-[#8fa3ad]
            hover:text-[#e6e8eb]
            transition
          "
        >
          ← Volver a inicio
        </Link>

        <section className="space-y-10">
          {/* Encabezado */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Portafolio científico, tecnológico y de innovación cultural
            </h1>
            <p className="text-[#9aa0a6] max-w-3xl">
              Proyectos organizados por estado de desarrollo, con enfoque académico, 
              institucional y tecnológico.
            </p>
          </header>

          {/* Proyectos agrupados por estado */}
          {(Object.keys(estadoConfig) as EstadoProyecto[]).map((estado) => {
            const proyectosDelEstado = proyectosAgrupados[estado]
            if (proyectosDelEstado.length === 0) return null

            const config = estadoConfig[estado]

            return (
              <section key={estado} className="space-y-4">
                {/* Encabezado del estado */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{config.label}</h2>
                  <p className="text-sm text-[#9aa0a6]">
                    {proyectosDelEstado.length} proyecto{proyectosDelEstado.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* Grid de proyectos */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {proyectosDelEstado.map((p) => (
                    <li
                      key={p.id}
                      className={`
                        border rounded-lg p-6 transition
                        hover:border-[#8fa3ad] ${config.color}
                      `}
                    >
                      <div className="space-y-4">
                        {/* Badge de estado */}
                        <div className={`inline-block text-xs px-3 py-1 rounded ${config.badgeColor}`}>
                          {config.badge}
                        </div>

                        {/* Título */}
                        <h3 className="text-lg font-medium leading-snug">
                          {p.titulo}
                        </h3>

                        {/* Descripción */}
                        <p className="text-sm text-[#9aa0a6]">
                          {p.descripcion}
                        </p>

                        {/* Metadatos */}
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-[#8fa3ad] uppercase tracking-wide">
                            {p.area}
                          </span>
                          <span className="text-xs text-[#6a7178]">
                            {p.id}
                          </span>
                        </div>

                        {/* Enlace a la plataforma (si existe) */}
                        {p.enlace && (
                          <div className="pt-3">
                            <a
                              href={p.enlace}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-[#8fa3ad] hover:underline"
                            >
                              Abrir plataforma →
                            </a>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </section>
      </div>
    </main>
  )
}

