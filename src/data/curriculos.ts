export type Curriculo = {
  id: number
  nome: string
  cargo: string
  resumo: string
}

export const curriculosPadrao: Curriculo[] = [
  {
    id: 1,
    nome: 'Ana Silva',
    cargo: 'Desenvolvedora Front-end',
    resumo: 'React, Next.js e Tailwind.'
  },
  {
    id: 2,
    nome: 'Bruna Costa',
    cargo: 'UI/UX Designer',
    resumo: 'Design systems e experiência do usuário.'
  },
  {
    id: 3,
    nome: 'Carla Mendes',
    cargo: 'Analista de Sistemas',
    resumo: 'Requisitos, testes e documentação.'
  }
]