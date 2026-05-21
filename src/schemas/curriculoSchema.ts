import * as yup from 'yup'

export const curriculoSchema = yup.object({
  nome: yup
    .string()
    .required('Nome obrigatório')
    .min(3, 'Informe ao menos 3 caracteres'),

  cargo: yup
    .string()
    .required('Cargo obrigatório')
    .min(3, 'Informe ao menos 3 caracteres'),

  email: yup
    .string()
    .required('Email obrigatório')
    .email('Email inválido'),

  telefone: yup
    .string()
    .required('Telefone obrigatório')
    .min(14, 'Telefone inválido'),

  cpf: yup
    .string()
    .required('CPF obrigatório')
    .min(14, 'CPF inválido'),

  resumo: yup
    .string()
    .required('Resumo obrigatório')
    .min(10, 'Informe ao menos 10 caracteres'),

  habilidades: yup
    .array()
    .of(yup.string().required('Habilidade obrigatória'))
    .min(1, 'Adicione ao menos uma habilidade'),

  experiencias: yup.array().of(
    yup.object({
      empresa: yup.string().required('Empresa obrigatória'),
      cargo: yup.string().required('Cargo obrigatório'),
      periodo: yup.string().required('Período obrigatório'),
      descricao: yup
        .string()
        .required('Descrição obrigatória')
        .min(10, 'Mínimo 10 caracteres'),
    })
  ),

  formacoes: yup.array().of(
    yup.object({
      instituicao: yup.string().required('Instituição obrigatória'),
      curso: yup.string().required('Curso obrigatório'),
      periodo: yup.string().required('Período obrigatório'),
      descricao: yup
        .string()
        .required('Descrição obrigatória')
        .min(10, 'Mínimo 10 caracteres'),
    })
  ),

  imagem: yup.string().required('Imagem obrigatória'),
})