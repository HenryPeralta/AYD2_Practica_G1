const { getConnection } = require('../confing/db');

exports.getClientes = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM clientes');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener clientes.' });
  }
};

exports.agregarClientes = async (req, res) => {
  const { nombre, apellido, cui, telefono, correo, edad, genero, fechaIngreso } = req.body;

  try {
    const connection = await getConnection();
    
    // Verificar si el CUI existe en la tabla clientes
    const [rows] = await connection.query('SELECT cui FROM clientes WHERE cui = ?', [cui]);
    
    if (rows.length === 1) {
      return res.status(400).json({ error: 'El CUI ya existe en la base de datos' });
    }

    // Insertar la cita
    const query = 'INSERT INTO clientes (cui, nombre, apellido, telefono, correo, edad, genero, fecha_ingreso) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await connection.query(query, [cui, nombre, apellido, telefono, correo, edad, genero, fechaIngreso]);

    res.status(201).json({ message: 'Cliente agregado con éxito', id: result.insertId });
  } catch (error) {
    console.error('Error al programar la cita:', error);
    res.status(500).json({ error: 'Error al programar la cita' });
  }
};

// Obtener un cliente por CUI
exports.getClientePorCui = async (req, res) => {
  const { cui } = req.params;
  try {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM clientes WHERE cui = ?', [cui]);
    
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el cliente:', error);
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

// Actualizar un cliente por CUI
exports.actualizarCliente = async (req, res) => {
  const { cui } = req.params;
  const { nombre, apellido, telefono, correo, edad, genero, fechaIngreso } = req.body;
  
  try {
    const connection = await getConnection();
    
    // Verificar si el cliente existe
    const [rows] = await connection.query('SELECT * FROM clientes WHERE cui = ?', [cui]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    // Actualizar el cliente
    const query = `
      UPDATE clientes 
      SET nombre = ?, apellido = ?, telefono = ?, correo = ?, edad = ?, genero = ?, fecha_ingreso = ?
      WHERE cui = ?`;
    await connection.query(query, [nombre, apellido, telefono, correo, edad, genero, fechaIngreso, cui]);

    res.status(200).json({ message: 'Cliente actualizado con éxito' });
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
};