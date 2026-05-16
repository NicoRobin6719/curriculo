# Currículo

Este projeto é uma aplicação simples de gestão de currículos construída com **Next.js 16**, **React 19** e **Tailwind CSS**.

## Sobre o projeto

A aplicação permite:

- listar currículos cadastrados
- visualizar os detalhes de cada currículo
- criar um novo currículo usando um formulário
- armazenar dados localmente no navegador via `localStorage`

A página principal está em `/sistema/paginas/curriculos` e cada currículo tem um detalhe em `/sistema/paginas/curriculos/[id]`.

## Estrutura principal

- `src/app/sistema/paginas/curriculos/page.tsx` — lista de currículos
- `src/app/sistema/paginas/curriculos/[id]/page.tsx` — detalhe de currículo
- `src/app/sistema/paginas/curriculos/novo/page.tsx` — formulário para criar currículo
- `src/data/curriculos.ts` — dados iniciais de exemplo

## Como executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000/sistema/paginas/curriculos` no navegador.

## Observações

- Os currículos são mantidos localmente no navegador.
- Em um app real, os dados deveriam ser salvos em uma API ou banco de dados.

## GitHub

Repositório: `https://github.com/NicoRobin6719/curriculo`
