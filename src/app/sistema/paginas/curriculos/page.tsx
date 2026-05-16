'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiHeart } from 'react-icons/fi'
import { Curriculo, curriculosPadrao } from '@/data/curriculos'

export default function CurriculosPage() {
  const [curriculos, setCurriculos] = useState<Curriculo[]>([])

  useEffect(() => {
    const salvos = localStorage.getItem('curriculos')
    if (salvos) {
      setCurriculos(JSON.parse(salvos))
    } else {
      localStorage.setItem('curriculos', JSON.stringify(curriculosPadrao))
      setCurriculos(curriculosPadrao)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200 p-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-pink-700">🎀 Currículos</h1>
          <p className="text-pink-700/80">
            Gerencie e visualize todos os currículos cadastrados.
          </p>
        </div>

        <Link
          href="/sistema/paginas/curriculos/novo"
          className="rounded-xl bg-pink-500 px-6 py-3 text-white font-semibold"
        >
          + Novo currículo
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {curriculos.map(c => (
          <div key={c.id} className="relative rounded-3xl bg-pink-50 p-6 shadow-lg">
            <FiHeart className="absolute right-5 top-5 text-pink-400" />

            <h2 className="text-xl font-bold text-pink-700">{c.nome}</h2>
            <p className="text-pink-600">{c.cargo}</p>
            <p className="mt-4 text-sm text-pink-700/80">{c.resumo}</p>

            <Link
              href={`/sistema/paginas/curriculos/${c.id}`}
              className="mt-6 block rounded-xl bg-pink-100 py-3 text-center font-semibold text-pink-600"
            >
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}