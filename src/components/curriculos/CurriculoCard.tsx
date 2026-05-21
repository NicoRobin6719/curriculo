import Link from 'next/link'
import { Curriculo } from '@/data/curriculos'

type Props = {
  curriculo: Curriculo
}

export function CurriculoCard({ curriculo }: Props) {
  return (
    <Link
      href={`/sistema/paginas/curriculos/${curriculo.id}`}
      className="block rounded-2xl border bg-white p-4 shadow hover:scale-105 transition"
    >
      <h3 className="font-bold text-lg">{curriculo.nome}</h3>
      <p className="text-pink-600">{curriculo.cargo}</p>
      <p className="text-sm text-gray-600">{curriculo.resumo}</p>
    </Link>
  )
}