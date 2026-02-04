"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f1115]/95 backdrop-blur border-b border-[#2a2d33]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo / Nombre */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-[#8fa3ad] flex items-center justify-center text-xs font-bold text-[#8fa3ad]">
            EM
          </div>
          <span className="text-sm font-semibold text-[#e6e8eb] hidden sm:inline">
            Eduardo Martínez
          </span>
        </Link>

        {/* Links de navegación */}
        <ul className="flex items-center gap-6 text-sm text-[#9aa0a6]">
          <li>
            <Link
              href="/"
              className="hover:text-[#e6e8eb] transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/proyectos"
              className="hover:text-[#e6e8eb] transition-colors duration-200"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <a
              href="/Eduardo_Martinez_CV.pdf"
              className="hover:text-[#e6e8eb] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              CV
            </a>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-3 py-1 rounded border border-[#8fa3ad] hover:border-[#e6e8eb] hover:text-[#e6e8eb] transition-colors duration-200"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
