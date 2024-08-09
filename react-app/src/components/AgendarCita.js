import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AgendarCita = () => {
  const [cui, setCui] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/citas/programar', { cui, fecha, hora });
      
      alert('Cita agendada exitosamente');
    } catch (error) {
      console.log({ cui, fecha, hora })
      alert('Error al agendar la cita');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">Agendar Cita</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCUI">
              <Form.Label>CUI</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el CUI" value={cui} onChange={(e) => setCui(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formHora">
              <Form.Label>Hora</Form.Label>
              <Form.Control type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Agendar Cita
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AgendarCita;
