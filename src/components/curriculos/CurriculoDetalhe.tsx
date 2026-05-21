import { Curriculo } from '@/data/curriculos'

type Props = {
  curriculo: Curriculo
}

export function CurriculoDetalhe({ curriculo }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{curriculo.nome}</h1>
      <p className="text-pink-600 text-xl">{curriculo.cargo}</p>
      <p>{curriculo.resumo}</p>
    </div>
  )
}