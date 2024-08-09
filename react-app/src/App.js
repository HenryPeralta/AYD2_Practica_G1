import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AgendarCita from './components/AgendarCita';
import ReprogramarCita from './components/ReprogramarCita';
import ConsultarClientes from './components/ConsultarClientes';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gestión de Citas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#agendar">Agendar Cita</Nav.Link>
            <Nav.Link href="#reprogramar">Reprogramar Cita</Nav.Link>
            <Nav.Link href="#consultar">Consultar Clientes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <div id="agendar">
          <AgendarCita />
        </div>
        <div id="reprogramar" className="mt-5">
          <ReprogramarCita />
        </div>
        <div id="consultar" className="mt-5">
          <ConsultarClientes />
        </div>
      </Container>
    </>
  );
}

export default App;
