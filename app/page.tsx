import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen text-[#e6e8eb] px-8 py-20 overflow-hidden flex flex-col">
      {/* Fondo sutilizado - Optimizado para memoria */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f1115]" />
        <div className="bg-abstract-01 absolute inset-0 animate-bgSlide1" />
        <div className="bg-abstract-02 absolute inset-0 animate-bgSlide2" />
      </div>

      {/* Contenido */}
      <div className="relative z-0 grow">
      <section>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Laboratorio Científico Digital diseñado y desarrollado por Eduardo
          Andrés Martínez Martínez
        </h1>
        <p className="text-lg text-[#9aa0a6] max-w-3xl leading-relaxed">Soy Eduardo Andrés Martínez Martínez, 
          tecnológo en análisis y desarrollo de software interesado en asuntos de ciencia, filosofía e innovación socio-cultural</p>
        <p className="text-lg text-[#9aa0a6] max-w-3xl leading-relaxed">
          Infraestructura educativa, proyectos territoriales, sistemas de
          conocimiento y tecnología aplicada con enfoque institucional,
          trazabilidad, seguimiento retrospectivo, auditabilidad y rigor
          académico.
        </p>
      </section>

      {/* Líneas de trabajo */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">Líneas de trabajo</h2>

        <ul className="mt-4 space-y-2 text-gray-600">
          <li>— Bioinformática y análisis de datos</li>
          <li>— Educación científica digital</li>
          <li>— Sistemas de trazabilidad documental</li>
        </ul>
      </section>

      {/* Uso institucional */}
      <section className="mt-12">
        <h2 className="text-xl font-medium">Uso institucional</h2>

        <p className="mt-4 text-gray-600 max-w-prose">
          Esta plataforma sirve como punto de acceso central para instituciones,
          escuelas y aliados que requieren una visión clara y verificable de
          proyectos científicos en desarrollo.
        </p>
      </section>

      {/* Navegación */}
      <section className="mt-12">
        <a
          href="/proyectos"
          className="inline-block text-sm text-[#8fa3ad] hover:underline"
        >
          Ver portafolio →
        </a>
      </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
