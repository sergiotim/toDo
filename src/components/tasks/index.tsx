import { Card, Form, Button } from "react-bootstrap";
import { ITask } from "../../App";

interface TaskProps extends ITask {
  deleteTask: (id: string) => void;
  statusTask: (id: string) => void;
}

export function Task({
  id,
  nameTask,
  isChecked,
  deleteTask,
  statusTask,
}: TaskProps) {
  return (
    <>
      <Card>
        <Card.Body>
          <Form className="d-flex justify-content-between align-items-center">
            <Form.Group className="d-flex align-items-center gap-2">
              <Form.Check
                type="checkbox"
                checked={isChecked}
                onChange={() => statusTask(id)}
              ></Form.Check>
              <span className={isChecked ? "text-decoration-line-through" : ""}>
                {nameTask}
              </span>
            </Form.Group>
            <Button variant="outline-danger" onClick={() => deleteTask(id)}>
              <i className="bi bi-trash3-fill fs-6"></i>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
