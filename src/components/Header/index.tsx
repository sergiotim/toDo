import "./index.css";
import { Navbar, Container, Button } from "react-bootstrap";

interface HeaderProps {
  isLogged: boolean;
  onLogout: () => void;
}

export function Header({ isLogged, onLogout }: HeaderProps) {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="fw-bold mb-4">
      <div className="col-3"></div>
      <Container
        fluid="md"
        className="d-flex align-items-center col-6 justify-content-center"
      >
        <Navbar.Brand className=" fs-1 m-0" href="/">
          <i className="bi bi-clipboard-check-fill me-2"></i>
          ToDo
        </Navbar.Brand>
      </Container>
      <div className="col-3 d-flex  justify-content-end pe-5">
        {isLogged && (
          <Button variant="outline-light" onClick={onLogout}>
            Sair
          </Button>
        )}
      </div>
    </Navbar>
  );
}
