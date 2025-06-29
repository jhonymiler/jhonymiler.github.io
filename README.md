# Portfolio React - Jhony Miler

Este é um portfolio pessoal construído com React, Vite e Bootstrap.

## 🚀 Tecnologias

- React 18
- Vite
- Bootstrap 5
- React Query (TanStack Query)
- SASS/SCSS
- React Icons

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/jhonymiler/jhonymiler.github.io.git
cd jhonymiler.github.io
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
cp .env.example .env
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run preview` - Visualiza o build de produção
- `npm run deploy` - Faz deploy para GitHub Pages

## ⚙️ Configuração da API GraphQL (Opcional)

O projeto pode funcionar com uma API GraphQL ou com dados locais. Para usar a API GraphQL:

1. Edite o arquivo `.env` e configure:
```env
VITE_PROJECT_ID=https://sua-api-graphql.com/graphql
VITE_API_KEY=sua-chave-de-api
```

Se as variáveis não estiverem configuradas, a aplicação usará dados locais automaticamente.

## 🐛 Correções Recentes

### Problema: Warning sobre "key" prop
- **Erro**: `Warning: Each child in a list should have a unique "key" prop`
- **Solução**: Adicionado `key` único para cada item da lista de skills
- **Arquivo**: `src/pages/Apresentacao.jsx`

### Problema: Erro GraphQL 404
- **Erro**: `GraphQL Error (Code: 404)`
- **Solução**: Implementado sistema de fallback com dados locais quando a API não está disponível
- **Arquivos**: `src/components/header/Header.jsx`, `src/data/Header.js`

### Problema: Cannot read properties of undefined
- **Erro**: `Cannot read properties of undefined (reading 'logos')`
- **Solução**: Adicionado verificação de dados e fallback para evitar erros quando a API falha
- **Arquivo**: `src/components/header/Header.jsx`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── header/         # Componentes do cabeçalho
│   ├── footer/         # Componentes do rodapé
│   └── ...
├── pages/              # Páginas da aplicação
├── data/               # Hooks para dados
├── hooks/              # Hooks customizados
├── assets/             # Recursos estáticos
└── utils/              # Utilitários
```

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

```bash
npm run deploy
```

## 📄 Licença

Este projeto é de uso pessoal.
