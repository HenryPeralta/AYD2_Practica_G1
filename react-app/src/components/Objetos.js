import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const FormObjeto = () => {
  const [file, setFile] = useState(null);
  const [cui, setCui] = useState('');
  const [codigo, setCodigo] = useState('');
  const [message, setMessage] = useState('');

  // Handle file selection and conversion to Base64
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Check file type
    const validTypes = [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/pdf',
    ];
    if (!validTypes.includes(selectedFile.type)) {
      setMessage('Invalid file type. Please upload a DOC, DOCX, or PDF file.');
      return;
    }

    // Convert file to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile({ base64: reader.result, name: selectedFile.name });
    };
    reader.readAsDataURL(selectedFile);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !cui || !codigo) {
      setMessage('Please complete all fields.');
      return;
    }

    try {
      // Send POST request to the server using fetch
      const response = await fetch('http://localhost:5000/api/expedientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          base64File: file.base64,
          fileName: file.name,
          cui,
          codigo,
        }),
      });

      if (!response.ok) {
        console.error('Error al subir archivo:', response.status);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error uploading file: ' + error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">Upload a Word or PDF File</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile">
              <Form.Label>Select a file</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
            </Form.Group>

            <Form.Group controlId="formCUI">
              <Form.Label>CUI</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CUI"
                value={cui}
                onChange={(e) => setCui(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCodigo">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Código"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Upload
            </Button>
          </Form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </Col>
      </Row>
    </Container>
  );
};

export default FormObjeto;
