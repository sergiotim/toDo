
# ToDo List 📝

Aplicação simples de lista de tarefas (ToDo List) desenvolvida em React com TypeScript.

Este projeto permite ao usuário:
- Adicionar tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Filtrar tarefas por status (Concluídas, Não Concluídas ou Todas)
- Salvar as tarefas no `localStorage` para persistência dos dados mesmo após atualizar a página.

---

## Tecnologias Utilizadas 🚀

- React 19
- TypeScript
- Vite
- Bootstrap 5
- React-Bootstrap
- LocalStorage API

---

## Estrutura do Projeto 🗂️

```
toDo/
├── public/
├── src/
│   ├── components/
│   │   └── Task.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── types.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Funcionalidades ✨

### Adicionar Tarefa
Campo de input que permite criar uma nova tarefa.

### Excluir Tarefa
Botão de lixeira para remover a tarefa desejada.

### Marcar como Concluída
Checkbox que altera o status da tarefa e aplica um estilo `line-through` no texto.

### Filtrar Tarefas
Select que permite filtrar:
- Não Concluídas
- Concluídas
- Todas

### Persistência de Dados
As tarefas ficam armazenadas no `localStorage` do navegador.

---

## Melhorias Futuras 🔮

- Adicionar tema Dark/Light.
- Adicionar categorias de tarefas.
- Adicionar data de criação das tarefas.
- Implementar autenticação e backend para salvar tarefas online.

---

## Autor 👨‍💻

Desenvolvido por [Sérgio Timoteo](https://github.com/sergiotim)
