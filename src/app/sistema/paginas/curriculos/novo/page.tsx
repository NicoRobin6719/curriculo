'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CurriculoForm } from '@/components/forms/CurriculoForm'
import { curriculosPadrao } from '@/data/curriculos'

export default function NovoCurriculoPage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)

  async function handleSubmit(data: any) {
    setIsSaving(true)

    const salvos = localStorage.getItem('curriculos')
    const curriculos = salvos ? JSON.parse(salvos) : curriculosPadrao
    const nextId = curriculos.length > 0 ? Math.max(...curriculos.map((item: any) => item.id)) + 1 : 1

    const proximo = [...curriculos, { ...data, id: nextId }]
    localStorage.setItem('curriculos', JSON.stringify(proximo))

    setIsSaving(false)
    router.push('/sistema/paginas/curriculos')
  }

  return (
    <main className="min-h-screen bg-pink-100 p-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Novo curriculo</h1>
        <CurriculoForm onSubmit={handleSubmit} />
      </div>
    </main>
  )
}
