"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const email = "e2m9227@gmail.com";

  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Silently fail
    }
  }

  return (
    <footer className="mt-20 py-12 border-t border-[#2a2d33] text-[#9aa0a6]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Información */}
          <div>
            <h3 className="text-[#e6e8eb] font-medium mb-4">Laboratorio Digital</h3>
            <p className="text-sm leading-relaxed">
              Plataforma de investigación y documentación científica con enfoque en trazabilidad y
              rigor académico.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-[#e6e8eb] font-medium mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#e6e8eb] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-[#e6e8eb] transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e6e8eb] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-[#e6e8eb] font-medium mb-4">Conecta</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/eduardoamartinezm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#2a2d33] flex items-center justify-center hover:border-[#e6e8eb] hover:text-[#e6e8eb] transition-colors text-xs font-medium"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://github.com/ed2m9227" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#2a2d33] flex items-center justify-center hover:border-[#e6e8eb] hover:text-[#e6e8eb] transition-colors text-xs font-medium"
                aria-label="GitHub"
              >
                ⚙
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-8 h-8 rounded-full border border-[#2a2d33] flex items-center justify-center hover:border-[#e6e8eb] hover:text-[#e6e8eb] transition-colors text-xs font-medium"
                aria-label="Mostrar correo"
              >
                ✉
              </button>
            </div>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-[#2a2d33] pt-8">
          <p className="text-xs text-[#6a7178] text-center">
            © {currentYear} Laboratorio Científico Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Modal sencillo */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />

          <div className="relative z-10 w-full max-w-sm bg-[#0f1115] border border-[#232838] rounded p-6">
            <h4 className="text-lg font-medium mb-2">Correo de contacto</h4>
            <p className="text-sm text-[#9aa0a6] mb-4">Usa este correo para contactarme directamente.</p>

            <div className="flex items-center justify-between bg-[#0b0c0f] border border-[#232838] rounded px-3 py-2 mb-4">
              <span className="text-sm text-[#e6e8eb] truncate">{email}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-4 px-3 py-1 bg-[#1f6f8b] hover:bg-[#265f78] rounded text-white text-sm"
              >
                Copiar
              </button>
            </div>

            {copied && <p className="text-xs text-green-300 mb-2">Copiado al portapapeles</p>}

            <div className="flex justify-end">
              <button onClick={() => setOpen(false)} className="text-sm text-[#8fa3ad] hover:underline">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
