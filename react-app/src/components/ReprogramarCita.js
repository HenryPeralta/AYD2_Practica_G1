import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ReprogramarCita = () => {
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/citas/reprogramar', {id, fecha, hora });
      alert('Cita reprogramada exitosamente');
      console.log({id, fecha, hora })
    
    } catch (error) {
      console.log('Error:',{id, fecha, hora })
      alert('Error al reprogramar la cita');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">Reprogramar Cita</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formIdCita">
              <Form.Label>ID de Cita</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el ID de la Cita" value={id} onChange={(e) => setId(e.target.value)} required />
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
              Reprogramar Cita
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ReprogramarCita;
