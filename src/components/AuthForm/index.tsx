import { Button, Form } from "react-bootstrap";

export default function AuthForm({ buttonLabel }: { buttonLabel: string }) {
  return (
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
        {buttonLabel}
      </Button>
    </Form>
  );
}
