import "./App.css";
import {
  Navbar,
  Container,
  Stack,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Task } from "./components/tasks";
import { useState } from "react";

export interface ITask {
  id: string;
  nameTask: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [nameNewTask, setNameNewTask] = useState<string>("");

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
    setTasks((e) => e.filter((task) => task.id != id));
  }

  function changeTaskStatus(id:string){
    setTasks((e)=> (e.map((task)=>(task.id === id ? {...task,isChecked: !task.isChecked}: task))))
  }

  return (
    <>
      <Navbar className="bg-primary mb-4 h-100">
        <Container fluid="md justify-content-center">
          <Navbar.Brand className="text-light fs-1" href="#">
            ToDo
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid="md">
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

        <Stack gap={2}>
          {tasks.map((task) => (
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
      </Container>
    </>
  );
}

export default App;
