'use client'

import { use, useEffect, useState } from 'react'
import Link from 'next/link'
import { Curriculo, curriculosPadrao } from '@/data/curriculos'

export default function CurriculoDetalhePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [curriculo, setCurriculo] = useState<Curriculo | null | undefined>(undefined)

  useEffect(() => {
    const salvos = localStorage.getItem('curriculos')
    const lista: Curriculo[] = salvos ? JSON.parse(salvos) : curriculosPadrao

    const encontrado = lista.find(c => c.id === Number(resolvedParams.id))
    setCurriculo(encontrado ?? null)
  }, [resolvedParams.id])

  if (curriculo === undefined) {
    return (
      <main className="min-h-screen bg-pink-100 p-10">
        <h1 className="text-2xl font-bold text-pink-700">Carregando currículo...</h1>
      </main>
    )
  }

  if (curriculo === null) {
    return (
      <main className="min-h-screen bg-pink-100 p-10">
        <h1 className="text-2xl font-bold text-pink-700">
          Currículo não encontrado 💔
        </h1>

        <Link
          href="/sistema/paginas/curriculos"
          className="mt-6 inline-block rounded-xl bg-pink-300 px-6 py-3 font-semibold"
        >
          Voltar
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200 p-10">
      <div className="max-w-3xl rounded-3xl bg-pink-50 p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          {curriculo.nome}
        </h1>

        <p className="text-xl text-pink-600 mb-6">
          {curriculo.cargo}
        </p>

        <p className="text-pink-700 leading-relaxed">
          {curriculo.resumo}
        </p>

        <Link
          href="/sistema/paginas/curriculos"
          className="mt-10 inline-block rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white"
        >
          ← Voltar
        </Link>
      </div>
    </main>
  )
}