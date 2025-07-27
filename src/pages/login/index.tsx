import { useState } from "react";
import AuthForm from "../../components/AuthForm";
import "./index.css";
import { Card, Container, Tabs, Tab } from "react-bootstrap";
import api from "../../api";

interface AuthProps{
  onLoginSuccess: () =>void
}

export function Auth({onLoginSuccess}:AuthProps) {
  const [authType, setAuthType] = useState<"login" | "register">("login");

  const [message, setMessage] = useState<{
    type: "success" | "danger";
    text: string;
  } | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(data: { email: string; password: string }) {
    setMessage(null);
    setIsLoading(true);

    try {
      if (authType === "register") {
        await api.post("/auth/register", data);
        setMessage({
          type: "success",
          text: "Registro realizado com sucesso! Agora faça login.",
        });
        setAuthType("login");
      } else {
        const response = await api.post("/auth/login", data);
        const { access_token } = response.data;
        localStorage.setItem("accessToken", access_token);
        setMessage({ type: "success", text: "Login realizado com sucesso!" });

        onLoginSuccess()
      }
    } catch (error: any) {
      console.error(
        "Erro de Autenticação:",
        error.response?.data || error.message
      );

      setMessage({
        type: "danger",
        text:
          error.response?.data?.message ||
          "Erro de autenticação. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Container
        fluid="md"
        className="content d-flex align-items-center justify-content-center"
      >
        <Card id="card-auth">
          <Tabs
            activeKey={authType}
            onSelect={(authTypePrev) => {
              setAuthType(authTypePrev as "login" | "register");
              setMessage(null);
            }}
            justify
            className="fw-bold"
          >
            <Tab eventKey={"login"} title="Entrar">
              <Card.Body>
                <AuthForm
                  buttonLabel="Entrar"
                  message={message}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                ></AuthForm>
              </Card.Body>
            </Tab>
            <Tab eventKey={"register"} title="Inscrever-se">
              <Card.Body>
                <AuthForm buttonLabel="Inscrever-se" message={message} onSubmit={handleSubmit} isLoading={isLoading}></AuthForm>
              </Card.Body>
            </Tab>
          </Tabs>
        </Card>
      </Container>
    </>
  );
}
