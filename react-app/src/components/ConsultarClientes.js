import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';

const ConsultarClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('/api/citas/clientes');
        setClientes(response.data);
      } catch (error) {
        alert('Error al obtener los registros de clientes');
      }
    };

    fetchClientes();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Clientes y Citas</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>CUI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Citas</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.cui}>
              <td>{cliente.cui}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>
                <ul>
                  {cliente.citas && cliente.citas.length > 0 ? (
                    cliente.citas.map(cita => (
                      <li key={cita.fecha + cita.hora}>{cita.fecha} {cita.hora}</li>
                    ))
                  ) : (
                    <li>No hay citas</li>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ConsultarClientes;