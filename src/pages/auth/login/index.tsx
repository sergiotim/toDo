import { useState } from "react";
import "../auth.css";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Login() {
  const [validated, setValidated] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const verifySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      // Verificar no Banco de Dados
      console.log("foi", { email, password });
    }
    setValidated(true);
  };

  return (
    <>
      <Container
        fluid="md"
        className="content d-flex align-items-center justify-content-center"
      >
        <Card id="card-login">
          <Card.Header className="text-center h5">Login</Card.Header>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={verifySubmit}>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Insira seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                ></Form.Control>
                <Form.Text>Exemplo: exemplo@dominio.com</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Insira sua melhor senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  autoComplete="current-password"
                  ></Form.Control>
                  <Form.Text>
                    <Link to={"/recover"}>Esqueceu sua senha?</Link>
                  </Form.Text>
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Fazer Login
              </Button>
              <Form.Group>
                <Form.Text>
                  Precisando de uma conta?{" "}
                  <Link to={"/register"}>Registre-se</Link>
                </Form.Text>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
