import { NextResponse } from "next/server"

type Body = {
  name?: string
  email?: string
  message?: string
}

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

export async function OPTIONS() {
  return new NextResponse(null, { headers })
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body

    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos incompletos" }, { status: 400, headers })
    }

    // Validación básica del email
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400, headers })
    }

    // Aquí podrías integrar envío por proveedor o almacenar en DB
    // Por ahora registramos en consola para pruebas locales
    console.log("Contacto recibido:", { name, email, message })

    return NextResponse.json({ ok: true }, { headers })
  } catch {
    console.error("Error en /api/contact")
    return NextResponse.json({ error: "Error interno" }, { status: 500, headers })
  }
}
