// BuscarCliente.js
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import EditarClienteModal from './EditarCliente'; // Importa el modal

const BuscarCliente = () => {
  const [cui, setCui] = useState('');
  const [clienteData, setClienteData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBuscarCliente = async () => {
    try {
      const response = await axios.get(`/api/clientes/buscar/${cui}`);
      setClienteData(response.data);
      setShowModal(true); // Muestra el modal con los datos del cliente
    } catch (error) {
      alert('Error al buscar el cliente');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h2 className="text-center">Buscar Cliente</h2>
          <Form onSubmit={(e) => { e.preventDefault(); handleBuscarCliente(); }}>
            <Form.Group controlId="formCUIBuscar">
              <Form.Label>CUI</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el CUI"
                value={cui}
                onChange={(e) => setCui(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>

      {clienteData && (
        <EditarClienteModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          clienteData={clienteData}
          setClienteData={setClienteData}
        />
      )}
    </Container>
  );
};

export default BuscarCliente;
