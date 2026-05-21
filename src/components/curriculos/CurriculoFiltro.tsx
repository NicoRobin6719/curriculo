type Props = {
  onChange: (value: string) => void
}

export function CurriculoFiltro({ onChange }: Props) {
  return (
    <input
      placeholder="Buscar por nome ou cargo..."
      onChange={e => onChange(e.target.value)}
      className="w-full rounded-xl border px-4 py-2"
    />
  )
}