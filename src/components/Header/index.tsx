import "./index.css"
import { Navbar, Container } from "react-bootstrap";


export function Header() {
  return (
      <Navbar bg="primary" data-bs-theme="dark" className="fw-bold mb-4">
        <Container fluid="md justify-content-center">
          <Navbar.Brand className="fs-1 m-0" href="/">
            <i className="bi bi-clipboard-check-fill me-2"></i>
            ToDo
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}
