'use client'

import { useForm, useFieldArray, type Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { curriculoSchema } from '@/schemas/curriculoSchema'
import { toast } from 'sonner'

type CurriculoFormData = {
  nome: string
  cargo: string
  email: string
  telefone: string
  cpf: string
  resumo: string
  habilidades: string[]
  experiencias: {
    empresa: string
    cargo: string
    periodo: string
    descricao: string
  }[]
  formacoes: {
    instituicao: string
    curso: string
    periodo: string
    descricao: string
  }[]
  imagem: string
}

type Props = {
  onSubmit: (data: CurriculoFormData) => void | Promise<void>
}

export function CurriculoForm({ onSubmit }: Props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CurriculoFormData>({
    resolver: yupResolver(curriculoSchema) as Resolver<CurriculoFormData>,
    defaultValues: {
      habilidades: [''],
      experiencias: [],
      formacoes: [],
      imagem: '',
    },
  })

  const habilidadesFieldArray = useFieldArray({ control, name: 'habilidades' as const } as any)
  const experienciasFieldArray = useFieldArray<CurriculoFormData, 'experiencias'>({ control, name: 'experiencias' })
  const formacoesFieldArray = useFieldArray<CurriculoFormData, 'formacoes'>({ control, name: 'formacoes' })

  async function submit(data: CurriculoFormData) {
    try {
      await onSubmit(data)
      toast.success('Currículo salvo com sucesso!')
    } catch {
      toast.error('Erro ao salvar currículo')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-8 rounded-3xl bg-pink-50 p-8 shadow-lg"
    >
      {/* CAMPOS BÁSICOS */}
      {['nome', 'cargo', 'email', 'telefone', 'cpf'].map(campo => (
        <div key={campo}>
          <input
            {...register(campo as keyof CurriculoFormData)}
            placeholder={campo}
            className="w-full rounded-xl border border-pink-200 px-4 py-3"
          />
          <p className="text-sm text-red-500">
            {errors[campo as keyof CurriculoFormData]?.message}
          </p>
        </div>
      ))}

      <textarea
        {...register('resumo')}
        placeholder="Resumo profissional"
        className="w-full rounded-xl border border-pink-200 px-4 py-3"
      />
      <p className="text-sm text-red-500">{errors.resumo?.message}</p>

      <div>
        <h3 className="font-bold text-pink-700 mb-2">Habilidades</h3>
        {habilidadesFieldArray.fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-3 mb-3">
            <input
              {...register(`habilidades.${index}` as const)}
              placeholder={`Habilidade ${index + 1}`}
              className="flex-1 rounded-xl border border-pink-200 px-4 py-3"
            />
            <button
              type="button"
              onClick={() => habilidadesFieldArray.remove(index)}
              className="rounded-xl bg-red-100 px-3 py-2 text-sm text-red-600"
            >
              Remover
            </button>
          </div>
        ))}
        <p className="text-sm text-red-500">{errors.habilidades?.message}</p>
        <button
          type="button"
          onClick={() => habilidadesFieldArray.append('')}
          className="rounded-xl bg-pink-200 px-4 py-2"
        >
          + Adicionar habilidade
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-pink-700 mb-2">URL da imagem</label>
        <input
          {...register('imagem')}
          placeholder="https://..."
          className="w-full rounded-xl border border-pink-200 px-4 py-3"
        />
        <p className="text-sm text-red-500">{errors.imagem?.message}</p>
      </div>

      {/* EXPERIÊNCIAS */}
      <section>
        <h3 className="font-bold text-pink-700 mb-2">Experiências</h3>

        {experienciasFieldArray.fields.map((field, i) => (
          <div key={field.id} className="space-y-2 mb-4">
            <input {...register(`experiencias.${i}.empresa` as const)} placeholder="Empresa" className="w-full rounded-xl border border-pink-200 px-4 py-3" />
            <p className="text-sm text-red-500">{errors.experiencias?.[i]?.empresa?.message}</p>

            <input {...register(`experiencias.${i}.cargo` as const)} placeholder="Cargo" className="w-full rounded-xl border border-pink-200 px-4 py-3" />
            <p className="text-sm text-red-500">{errors.experiencias?.[i]?.cargo?.message}</p>

            <input {...register(`experiencias.${i}.periodo` as const)} placeholder="Período" className="w-full rounded-xl border border-pink-200 px-4 py-3" />
            <p className="text-sm text-red-500">{errors.experiencias?.[i]?.periodo?.message}</p>

            <textarea {...register(`experiencias.${i}.descricao` as const)} placeholder="Descrição" className="w-full rounded-xl border border-pink-200 px-4 py-3" />
            <p className="text-sm text-red-500">{errors.experiencias?.[i]?.descricao?.message}</p>

            <button
              type="button"
              onClick={() => experienciasFieldArray.remove(i)}
              className="text-sm text-red-500"
            >
              Remover
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            experienciasFieldArray.append({
              empresa: '',
              cargo: '',
              periodo: '',
              descricao: '',
            })
          }
          className="rounded-xl bg-pink-200 px-4 py-2"
        >
          + Adicionar experiência
        </button>
      </section>

      {/* FORMAÇÕES */}
      <section>
        <h3 className="font-bold text-pink-700 mb-2">Formações</h3>

        {formacoesFieldArray.fields.map((field, i) => (
          <div key={field.id} className="space-y-2 mb-4">
            <input
              {...register(`formacoes.${i}.instituicao` as const)}
              placeholder="Instituição"
              className="w-full rounded-xl border border-pink-200 px-4 py-3"
            />
            <p className="text-sm text-red-500">{errors.formacoes?.[i]?.instituicao?.message}</p>

            <input
              {...register(`formacoes.${i}.curso` as const)}
              placeholder="Curso"
              className="w-full rounded-xl border border-pink-200 px-4 py-3"
            />
            <p className="text-sm text-red-500">{errors.formacoes?.[i]?.curso?.message}</p>

            <input
              {...register(`formacoes.${i}.periodo` as const)}
              placeholder="Período"
              className="w-full rounded-xl border border-pink-200 px-4 py-3"
            />
            <p className="text-sm text-red-500">{errors.formacoes?.[i]?.periodo?.message}</p>

            <textarea
              {...register(`formacoes.${i}.descricao` as const)}
              placeholder="Descrição"
              className="w-full rounded-xl border border-pink-200 px-4 py-3"
            />
            <p className="text-sm text-red-500">{errors.formacoes?.[i]?.descricao?.message}</p>

            <button
              type="button"
              onClick={() => formacoesFieldArray.remove(i)}
              className="text-sm text-red-500"
            >
              Remover
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            formacoesFieldArray.append({
              instituicao: '',
              curso: '',
              periodo: '',
              descricao: '',
            })
          }
          className="rounded-xl bg-pink-200 px-4 py-2"
        >
          + Adicionar formação
        </button>
      </section>

      <button
        disabled={isSubmitting}
        className="w-full rounded-xl bg-pink-500 py-3 font-bold text-white disabled:opacity-50"
      >
        Salvar currículo
      </button>
    </form>
  )
}