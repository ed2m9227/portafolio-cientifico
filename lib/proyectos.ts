export type Proyecto = {
  id: string
  slug: string
  titulo: string
  area: string
  descripcion: string
  estado: 'Idea' | 'En desarrollo' | 'MVP'
}

export const proyectos: Proyecto[] = [
  {
    id: 'TER-001',
    slug: 'montelibano-gen',
    titulo: 'MontelibanoGen - Plataforma análisis bioinformático de variación genética',
    area: 'Bioinformática',
    descripcion: 'Análisis de datos genéticos con enfoque en reproducibilidad y visualización científica.',
    estado: 'MVP',
  },
  {
    id: 'INF-001',
    slug: 'biblioteca-mural-qr',
    titulo: 'Biblioteca mural QR',
    area: 'Cultura / Tecnología',
    descripcion: 'Acceso a conocimiento mediante QR físicos institucionales.',
    estado: 'En desarrollo',
  },
  // … (los 17 restantes con el mismo esquema)
]
