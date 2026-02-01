import Link from "next/link"

interface Proyecto {
  id: string
  slug: string
  dominio: string
  titulo: string
  area: string
  descripcion: string
  enlace: string
}

const proyectos: Proyecto[] = [
  {
    id: "TER-001",
    slug: "montelibano-gen",
    dominio: "territorio",
    titulo: "MontelibanoGen - Plataforma análisis bioinformático de variación genética",
    area: "Bioinformática",
    descripcion:
      "Proyecto de análisis de datos genéticos con enfoque en reproducibilidad y visualización científica.",
    enlace: "https://e2m9227.shinyapps.io/MontelibanoGen/",
  },
  {
    id: "INF-001",
    slug: "biblioteca-mural-qr",
    dominio: "infraestructura",
    titulo: "Biblioteca mural QR",
    area: "Cultura / Tecnología",
    descripcion:
      "Sistema de acceso a contenidos académicos mediante códigos QR en espacios físicos.",
    enlace: "https://example.com",
  },
  // … (los 17 restantes con el mismo esquema)
]


export default function ProyectosPage() {
  return (
    <main className="relative min-h-screen text-[#e6e8eb] px-6 py-20 overflow-hidden">
      {/* Fondo bio-02 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f1115]" />
        <div className="bg-bio-02 absolute inset-y-0 right-0 w-1/3 opacity-20 pointer-events-none" />
      </div>

<div className="max-w-4xl mx-auto space-y-8 relative z-0">
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

      <section className="max-w-6xl mx-auto space-y-10">
        {/* Encabezado */}
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Portafolio cientifico, tecnológico y de innovación cultural
          </h1>
          <p className="text-[#9aa0a6] max-w-3xl">
            Proyectos activos y en desarrollo organizados por dominio,
            con enfoque académico, institucional y tecnológico.
          </p>
        </header>

        {/* Lista de proyectos */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((p) => (
            <li
              key={p.id}
              className="
                bg-[#161a22]
                border border-[#232838]
                rounded-lg
                p-6
                transition
                hover:border-[#8fa3ad]
              "
            >
              <div className="space-y-3">
                <h2 className="text-xl font-medium">
                  <Link
                    href={`/proyectos/${p.slug}`}
                    className="hover:underline"
                  >
                    {p.titulo}
                  </Link>
                </h2>

                <p className="text-sm text-[#9aa0a6]">
                  {p.area}
                </p>

                <p className="text-xs text-[#8fa3ad] uppercase tracking-wide">
                  {p.dominio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      </div>
    </main>
  )
}

