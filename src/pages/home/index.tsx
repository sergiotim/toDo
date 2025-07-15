import { Stack, Form, Button, InputGroup } from "react-bootstrap";
import { Task } from "../../components/tasks";
import {Container} from "react-bootstrap";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface ITask {
  id: string;
  nameTask: string;
  isChecked: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const historyTasks = localStorage.getItem("tasks");
    return historyTasks ? JSON.parse(historyTasks) : [];
  });
  const [nameNewTask, setNameNewTask] = useState<string>("");
  const [filter, setFilter] = useState<string>("1");

  function addTask(nameNewTask: string) {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      nameTask: nameNewTask,
      isChecked: false,
    };

    setTasks([...tasks, newTask]);
    console.log(tasks);
    setNameNewTask("");
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
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  

  return (
    <>
      <Container fluid="md" className="content ">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nome da Tarefa"
            onChange={(e) => setNameNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (nameNewTask != "") {
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
                nameTask={task.nameTask}
                isChecked={task.isChecked}
                deleteTask={deleteTask}
                statusTask={changeTaskStatus}
              ></Task>
            ))}
        </Stack>
        <Link to={"/login"}>login</Link>
      </Container>
    </>
  );
}
