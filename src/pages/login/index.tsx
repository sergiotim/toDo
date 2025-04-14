import "./index.css";
import { Card, Container, Form, Button } from "react-bootstrap";

export function Login() {
  return (
    <>
      <Container
        fluid="md"
        className="content d-flex align-items-center justify-content-center"
      >
        <Card id="card-login">
          <Card.Header className="text-center h5">Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Insira seu melhor e-mail"
                ></Form.Control>
                <Form.Text>Exemplo: exemplo@dominio.com</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insira sua melhor senha"
                ></Form.Control>
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Fazer Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
