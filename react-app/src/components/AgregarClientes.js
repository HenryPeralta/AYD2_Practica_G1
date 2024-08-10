import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AgregarCliente = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cui, setCui] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/clientes/agregar', { nombre, apellido, cui, telefono, correo, edad, genero, fechaIngreso });
      
      alert('Cliente agregado exitosamente');
    } catch (error) {
      console.log({ nombre, apellido, cui, telefono, correo, edad, genero, fechaIngreso })
      alert('Error al agregar al cliente');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">Agregar Cliente</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formCUI">
              <Form.Label>CUI</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el CUI" value={cui} onChange={(e) => setCui(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formTelefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formEdad">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el Edad" value={edad} onChange={(e) => setEdad(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formGenero">
              <Form.Label>Genero</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el Genero" value={genero} onChange={(e) => setGenero(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formFechaIngreso">
              <Form.Label>Fecha Ingreso</Form.Label>
              <Form.Control type="date" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Ingresar Ciente
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AgregarCliente;
