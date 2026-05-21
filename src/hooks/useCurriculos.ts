import { useEffect, useState } from 'react'
import { curriculosPadrao, Curriculo } from '@/data/curriculos'

const STORAGE_KEY = 'curriculos'

export function useCurriculos() {
  const [curriculos, setCurriculos] = useState<Curriculo[]>([])

  useEffect(() => {
    const salvos = localStorage.getItem(STORAGE_KEY)

    if (!salvos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(curriculosPadrao))
      setCurriculos(curriculosPadrao)
      return
    }

    try {
      setCurriculos(JSON.parse(salvos) as Curriculo[])
    } catch {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(curriculosPadrao))
      setCurriculos(curriculosPadrao)
    }
  }, [])

  useEffect(() => {
    if (curriculos.length === 0) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(curriculos))
  }, [curriculos])

  function adicionar(curriculo: Curriculo) {
    setCurriculos(prev => [...prev, curriculo])
  }

  function buscarPorId(id: number) {
    return curriculos.find(c => c.id === id)
  }

  return {
    curriculos,
    adicionar,
    buscarPorId,
  }
}
