import React, { useState } from 'react';

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
    const validTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];
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
    <div className="container">
      <h1>Upload a Word or PDF File</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fileInput">Select a file:</label>
          <input type="file" className="form-control" id="fileInput" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
        </div>
        <div className="form-group">
          <label htmlFor="cuiInput">CUI:</label>
          <input type="text" className="form-control" id="cuiInput" placeholder="Enter CUI" value={cui} onChange={(e) => setCui(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="codigoInput">Código:</label>
          <input type="text" className="form-control" id="codigoInput" placeholder="Enter Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default FormObjeto;
