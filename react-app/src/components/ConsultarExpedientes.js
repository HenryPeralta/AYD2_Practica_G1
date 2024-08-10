import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';

const ConsultarExpedientes = () => {
  const [expedientes, setExpedientes] = useState([]);

  useEffect(() => {
    const fetchExpedientes = async () => {
      try {
        const response = await axios.get('/api/expedientes');
        console.log('Expedientes data:', response.data); // Log the data to check its structure

        // Convert the archivo field from a byte array to a URL string
        const expedientesData = Array.isArray(response.data)
          ? response.data.map((expediente) => ({
              ...expediente,
              url: String.fromCharCode(...expediente.archivo.data), // Convert the byte array to a string
            }))
          : [];

        setExpedientes(expedientesData);
      } catch (error) {
        console.error('Error fetching expedientes:', error);
        alert('Error al obtener los registros de expedientes');
      }
    };

    fetchExpedientes();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Expedientes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>CUI</th>
            <th>Código</th>
            <th>Archivo (URL)</th>
            <th>Tipo de Archivo</th>
            <th>Fecha de Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {expedientes.map((expediente) => (
            
            <tr key={expediente.id}>
              <td>{expediente.cui}</td>
              <td>{expediente.codigo}</td>
              <td>
                <a href={expediente.url}>
                  Ver archivo
                </a>
              </td>
              <td>{expediente.tipo_archivo}</td>
              <td>{new Date(expediente.fecha_ingreso).toLocaleDateString('es-ES')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ConsultarExpedientes;
