import { Card, Form, Button } from "react-bootstrap";
import { ITask } from "../../App";

interface TaskProps extends ITask{
    deleteTask: (id:string) =>void
}

export function Task({id, nameTask, isChecked, deleteTask}: TaskProps) {
    



  return (
    <>
      <Card>
        <Card.Body>
          <Form className="d-flex justify-content-between align-items-center">
            <Form.Check
              className=""
              type="checkbox"
              label={nameTask}
            ></Form.Check>
            <Button variant="outline-danger" onClick={()=>(deleteTask(id))}>
              <i className="bi bi-trash3-fill fs-6"></i>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
