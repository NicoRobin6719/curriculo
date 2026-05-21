// Remove tudo que não for número
export function onlyNumbers(value: string) {
  return value.replace(/\D/g, '')
}

// Máscara de CPF: 000.000.000-00
export function maskCPF(value: string) {
  const numbers = onlyNumbers(value).slice(0, 11)

  return numbers
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

// Máscara de telefone: (00) 00000-0000
export function maskPhone(value: string) {
  const numbers = onlyNumbers(value).slice(0, 11)

  return numbers
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}