import { Stack, Form, Button, InputGroup } from "react-bootstrap";
import { Task } from "../../components/Task";
import { Container } from "react-bootstrap";

import { useEffect, useState } from "react";
import api from "../../api";

export interface ITask {
  id: string;
  name: string;
  isChecked: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [nameNewTask, setNameNewTask] = useState<string>("");
  const [filter, setFilter] = useState<string>("1");

  async function addTask(nameNewTask: string) {
    try {
      const response = await api.post("/user", { name: nameNewTask });
      const newTask = response.data;

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNameNewTask("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa", error);
    }
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id != id));
  }

  function changeTaskStatus(id: string) {
    
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get("/user");
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas", error);
      }
    }
    fetchTasks();
  }, []);

  return (
    <>
      <Container fluid="md" className="content ">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nome da Tarefa"
            onChange={(e) => setNameNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (nameNewTask !== "") {
                if (e.key === "Enter") {
                  addTask(nameNewTask);
                }
              }
            }}
            value={nameNewTask}
          ></Form.Control>
          <Button
            onClick={() => {
              if (nameNewTask != "") {
                addTask(nameNewTask);
              }
            }}
          >
            <i className="bi bi-plus-lg"></i>
          </Button>
        </InputGroup>

        <Form.Select
          aria-label="Filtrar tarefas"
          className="mb-2 w-25"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="sm"
        >
          <option value="1">Não Concluídas</option>
          <option value="2">Concluídas</option>
          <option value="3">Todas</option>
        </Form.Select>

        <Stack gap={2}>
          {tasks
            .filter((task) => {
              if (filter === "1") {
                return !task.isChecked;
              }
              if (filter === "2") {
                return task.isChecked;
              }
              return true;
            })
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                isChecked={task.isChecked}
                deleteTask={deleteTask}
                statusTask={changeTaskStatus}
              ></Task>
            ))}
        </Stack>
      </Container>
    </>
  );
}
