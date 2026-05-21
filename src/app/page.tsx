import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-8rem)] bg-pink-50 text-pink-900">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Bem-vinda ao Sistema de Currículos</h1>
        <p className="text-lg text-pink-700/90 mb-8">
          Use o menu para navegar pelos currículos ou cadastrar um novo currículo.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/sistema/paginas/curriculos"
            className="rounded-xl bg-pink-600 px-5 py-3 text-white shadow hover:bg-pink-700 transition"
          >
            Ver currículos
          </Link>
          <Link
            href="/sistema/paginas/curriculos/novo"
            className="rounded-xl border border-pink-600 px-5 py-3 text-pink-600 hover:bg-pink-100 transition"
          >
            Novo currículo
          </Link>
        </div>
      </div>
    </main>
  )
}
