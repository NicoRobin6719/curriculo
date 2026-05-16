'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { curriculosPadrao } from '@/data/curriculos'

export default function NovoCurriculoPage() {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [resumo, setResumo] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!nome || !cargo || !resumo) {
      alert('Preenche tudo, criatura 😭')
      return
    }

    const novoCurriculo = {
      id: curriculosPadrao.length + 1,
      nome,
      cargo,
      resumo
    }

    // ⚠️ mock total (em app real isso iria pra API)
    curriculosPadrao.push(novoCurriculo)

    router.push('/sistema/paginas/curriculos')
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200 p-10"
    >
      <div className="max-w-3xl">
        <h1 className="mb-2 text-4xl font-bold text-pink-700">
          🎀 Novo Currículo
        </h1>

        <p className="mb-10 text-pink-700/80">
          Preencha as informações do novo currículo
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-3xl bg-pink-50 p-10 shadow-xl"
        >
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome completo"
            className="w-full rounded-xl bg-pink-100 border border-pink-300 p-4 text-pink-700 outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            placeholder="Cargo"
            className="w-full rounded-xl bg-pink-100 border border-pink-300 p-4 text-pink-700 outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            rows={5}
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            placeholder="Resumo profissional"
            className="w-full rounded-xl bg-pink-100 border border-pink-300 p-4 text-pink-700 outline-none focus:ring-2 focus:ring-pink-400"
          />

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Salvar 💾
            </button>

            <Link
              href="/sistema/paginas/curriculos"
              className="rounded-xl bg-pink-200 px-8 py-3 font-semibold text-pink-700 transition hover:bg-pink-300"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </motion.main>
  )
}