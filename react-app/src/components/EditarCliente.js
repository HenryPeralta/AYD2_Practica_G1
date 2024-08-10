// EditarClienteModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditarClienteModal = ({ show, handleClose, clienteData, setClienteData }) => {
  const handleChange = (e) => {
    setClienteData({ ...clienteData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/clientes/actualizar/${clienteData.cui}`, clienteData);
      alert('Cliente actualizado exitosamente');
      handleClose();
    } catch (error) {
      alert('Error al actualizar el cliente');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={clienteData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={clienteData.apellido}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              value={clienteData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCorreo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={clienteData.correo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEdad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="text"
              name="edad"
              value={clienteData.edad}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGenero">
            <Form.Label>Género</Form.Label>
            <Form.Control
              type="text"
              name="genero"
              value={clienteData.genero}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Actualizar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditarClienteModal;
