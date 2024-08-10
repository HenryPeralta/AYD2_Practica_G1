import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AgendarCita from './components/AgendarCita';
import ReprogramarCita from './components/ReprogramarCita';
import ConsultarClientes from './components/ConsultarClientes';
import AgregarCliente from './components/AgregarClientes';
import BuscarCliente from './components/BuscarCliente';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gestión de Citas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='#agregar'>Agregar Cliente</Nav.Link>
            <Nav.Link href='#buscar'>Buscar Cliente</Nav.Link>
            <Nav.Link href="#agendar">Agendar Cita</Nav.Link>
            <Nav.Link href="#reprogramar">Reprogramar Cita</Nav.Link>
            <Nav.Link href="#consultar">Consultar Clientes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <div id="agregar" className="mt-5">
          <AgregarCliente />
        </div>
        <div id="buscar" className="mt-5">
          <BuscarCliente />
        </div>
        <div id="agendar" className="mt-5">
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
