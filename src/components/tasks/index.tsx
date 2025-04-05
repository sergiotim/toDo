import { Card, Form, Button } from "react-bootstrap";

interface Task {
  nameTask: string;
}

export function Task({ nameTask }: Task) {
  return (
    <>
      <Card>
        <Card.Body className="d-flex justify-content-between align-items-center">
            <Form>
            <Form.Check className="" type="checkbox" label={nameTask}></Form.Check>
            </Form>
            <Button variant="outline-danger">
                <i className="bi bi-trash3-fill fs-6"></i>
            </Button>


        </Card.Body>
      </Card>
    </>
  );
}
