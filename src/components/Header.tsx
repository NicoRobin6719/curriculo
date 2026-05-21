import { Nav } from './Nav'
import { FiFileText } from 'react-icons/fi'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-pink-600">
          <FiFileText size={22} />
          <span className="text-lg font-bold">Sistema de Currículos</span>
        </div>

        <Nav />
      </div>
    </header>
  )
}
