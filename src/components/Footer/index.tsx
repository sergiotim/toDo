import { Container } from "react-bootstrap"

import "./index.css"

export function Footer(){

    return(
        <footer className="bg-primary-subtle mt-4 d-flex align-items-center">
            <Container fluid="md">
                <p className="text-center fs-6 ">Desenvolvido por <a  className="link-primary link-offset-2" href="https://github.com/sergiotim" target="blank"><i className="bi bi-github me-1"></i>Sérgio Timoteo</a></p>
            </Container>
        </footer>
    )
}