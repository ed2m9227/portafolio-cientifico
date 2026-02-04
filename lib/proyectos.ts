export type Proyecto = {
  id: string
  slug: string
  titulo: string
  area: string
  descripcion: string
  estado: 'Idea' | 'En desarrollo' | 'MVP'
  enlace?: string
}

export const proyectos: Proyecto[] = [
  {
    id: 'TER-001',
    slug: 'montelibano-gen',
    titulo: 'MontelibanoGen - Plataforma análisis bioinformático de variación genética',
    area: 'Bioinformática',
    descripcion: 'Análisis de datos genéticos con enfoque en reproducibilidad y visualización científica.',
    estado: 'MVP',
    enlace: 'https://e2m9227.shinyapps.io/MontelibanoGen/'
  },
  {
    id: 'INF-001',
    slug: 'biblioteca-mural-qr',
    titulo: 'Biblioteca mural QR',
    area: 'Cultura / Tecnología',
    descripcion: 'Acceso a conocimiento mediante QR físicos institucionales.',
    estado: 'En desarrollo',
    enlace: 'https://example.com'
  },
  // … (los 17 restantes con el mismo esquema)
]
