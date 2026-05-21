'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/sistema/paginas/curriculos', label: 'Currículos' },
  { href: '/sistema/paginas/curriculos/novo', label: 'Novo Currículo' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6">
      {links.map(link => {
        const ativo =
          pathname === link.href || pathname.startsWith(link.href + '/')

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500',
              ativo
                ? 'text-pink-600'
                : 'text-gray-600 hover:text-pink-500'
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
