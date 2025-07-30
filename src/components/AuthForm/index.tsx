import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

interface AuthFormProps {
  buttonLabel: string;
  onSubmit: (data: { email: string; password: string }) => void;
  message: { type: "success" | "danger"; text: string } | null;
  isLoading?: boolean;
}

export default function AuthForm({
  buttonLabel,
  onSubmit,
  message,
  isLoading = false,
}: AuthFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onSubmit({
      email,
      password,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      {message && <Alert variant={message.type}>{message.text}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Insira seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
          disabled={isLoading}
        ></Form.Control>
        <Form.Text>Exemplo: exemplo@dominio.com</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Insira sua melhor senha"
          value={password}
          onChange={(s) => setPassword(s.target.value)}
          required
          autoComplete="current-password"
          disabled={isLoading}
        ></Form.Control>
      </Form.Group>

      <Button
        className="w-100"
        variant="primary"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Carregando...' : buttonLabel}
      </Button>
    </Form>
  );
}
