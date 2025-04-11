import { Navbar,Container } from "react-bootstrap"


export function Header(){


    return(
        <Navbar className="bg-primary mb-4 fw-bold">
        <Container fluid="md justify-content-center">
          <Navbar.Brand className="text-light fs-1" href="#">
            <i className="bi bi-clipboard-check-fill me-2"></i>
            ToDo
          </Navbar.Brand>
        </Container>
      </Navbar>
    )

}