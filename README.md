# boilerplate-vite-react

Projeto React + Vite desenvolvido para praticar a criação e reutilização de componentes em uma aplicação simples.

## Descrição

A aplicação é composta por um componente principal e por componentes secundários reutilizáveis, organizados para demonstrar uma estrutura básica de React com TypeScript. A tela inicial reúne navegação, seção principal, cards de funcionalidades e rodapé.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS

## Estrutura do projeto

```text
src/
├── assets/
├── components/
│   ├── featureSection/
│   │   └── cardFeature/
│   │       └── CardFeatures.tsx
│   ├── footer/
│   │   └── Footer.tsx
│   └── navbar/
│       └── Navbar.tsx
├── models/
│   └── FeatureSection.ts
├── pages/
│   └── home/
│       └── Home.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal no navegador.

## Componentes principais

- `App.tsx`: componente principal da aplicação
- `Navbar.tsx`: cabeçalho com navegação
- `Home.tsx`: página inicial com a seção principal
- `CardFeatures.tsx`: cards com os recursos destacados
- `Footer.tsx`: rodapé da aplicação

## Entrega solicitada

Para enviar a atividade, inclua:

- Print de tela do resultado obtido
- Print do componente principal mostrando a chamada para o novo componente
- Link do repositório público no GitHub ou a pasta compartilhada no Google Drive

## Espaço para screenshots

### Resultado da aplicação

<img width="1618" height="700" alt="Captura de tela 2026-05-05 163716" src="https://github.com/user-attachments/assets/395f5a6f-e0e1-49fc-bb18-4c2d6063c6a6" />

### Componente principal

<img width="642" height="404" alt="Captura de tela 2026-05-05 164007" src="https://github.com/user-attachments/assets/86692bd9-510a-4bc5-9a5e-74f1cc758161" />


## Observação

Se quiser, você pode expandir o layout com novos estilos, textos ou funcionalidades antes de realizar a entrega.
