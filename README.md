# ToDo

Aplicação web de lista de tarefas (ToDo) desenvolvida com React, TypeScript e Vite. Permite ao usuário registrar-se, autenticar-se e gerenciar suas tarefas de forma simples e intuitiva.

## Funcionalidades
- Cadastro e login de usuários
- Autenticação JWT (token salvo no localStorage)
- Adição, remoção e marcação de tarefas como concluídas
- Filtro de tarefas
- Interface responsiva com Bootstrap 5

## Tecnologias Utilizadas
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

## Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/sergiotim/toDo.git
   cd toDo
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:5173` no navegador.

> **Nota:** É necessário que a API backend esteja rodando em `http://localhost:3000`.

## Estrutura do Projeto
```
├── public/
│   └── logo.svg
├── src/
│   ├── api.ts           # Configuração do Axios
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   ├── components/      # Componentes reutilizáveis
│   └── pages/           # Páginas (auth, home)
├── index.html
├── package.json
└── ...
```

## Scripts Disponíveis
- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run preview` — Visualiza a build de produção localmente
- `npm run lint` — Executa o linter

## Autor
Desenvolvido por [Sérgio Timoteo](https://github.com/sergiotim)

---

![Logo](public/logo.svg)
