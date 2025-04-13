import React, { useState } from "react";
import "../auth.css";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Register() {
  const [validated, setValidated] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const verifySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
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
          <Card.Header className="text-center h5">Criar uma Conta</Card.Header>
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
                <Form.Control.Feedback type="invalid">
                  O e-mail é obrigatório
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Insira sua melhor senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  A senha é obrigatória
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="w-100" type="submit">
                Criar Conta
              </Button>
              <Form.Group>
                <Form.Text>
                  Já possui uma conta? <Link to={"/login"}>Entrar</Link>
                </Form.Text>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
