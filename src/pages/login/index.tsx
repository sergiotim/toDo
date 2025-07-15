import AuthForm from "../../components/AuthForm";
import "./index.css";
import { Card, Container, Tabs, Tab } from "react-bootstrap";

export function Login() {
  return (
    <>
      <Container
        fluid="md"
        className="content d-flex align-items-center justify-content-center"
      >
        <Card id="card-auth">
          <Tabs defaultActiveKey={"sign-in"} justify className="fw-bold">
            <Tab eventKey={"sign-in"} title="Entrar">
              <Card.Body>
                <AuthForm buttonLabel="Entrar"></AuthForm>
              </Card.Body>
            </Tab>
            <Tab eventKey={"sign-up"} title="Inscrever-se">
              <Card.Body>
                <AuthForm buttonLabel="Inscrever-se"></AuthForm>
              </Card.Body>
            </Tab>
          </Tabs>
        </Card>
      </Container>
    </>
  );
}
