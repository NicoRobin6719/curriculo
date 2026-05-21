export function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sistema de Gestão de Currículos</p>
        <p className="mt-1">Projeto acadêmico — Next.js + Tailwind + shadcn/ui</p>
      </div>
    </footer>
  )
}
