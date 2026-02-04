"use client"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | "ok" | "error">(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)

    if (!name || !email || !message || !consent) {
      setStatus("error")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("ok")
        setName("")
        setEmail("")
        setMessage("")
        setConsent(false)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-20 text-[#e6e8eb]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Contacto</h1>
        <p className="text-[#9aa0a6] mb-6">Envía un mensaje y te responderé en breve.</p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-[#0f1115] p-6 rounded border border-[#232838]">
          <label className="block">
            <span className="text-sm text-[#9aa0a6]">Nombre</span>
            <input
              className="mt-1 w-full rounded bg-[#0b0c0f] border border-[#232838] px-3 py-2 text-[#e6e8eb]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-[#9aa0a6]">Email</span>
            <input
              type="email"
              className="mt-1 w-full rounded bg-[#0b0c0f] border border-[#232838] px-3 py-2 text-[#e6e8eb]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-[#9aa0a6]">Mensaje</span>
            <textarea
              className="mt-1 w-full rounded bg-[#0b0c0f] border border-[#232838] px-3 py-2 text-[#e6e8eb]"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <label className="flex items-center gap-2 text-sm text-[#9aa0a6]">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            Acepto que mi mensaje sea almacenado y procesado conforme a la política de privacidad.
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#1f6f8b] hover:bg-[#265f78] rounded text-white disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "ok" && <span className="text-sm text-green-300">Mensaje enviado correctamente.</span>}
            {status === "error" && <span className="text-sm text-red-400">Error al enviar, intenta de nuevo.</span>}
          </div>
        </form>

        <p className="mt-4 text-xs text-[#6a7178]">Si prefieres, también puedes escribir a <a className="text-[#8fa3ad]" href="mailto:e2m9227@gmail.com">e2m9227@gmail.com</a></p>
      </div>
    </main>
  )
}
