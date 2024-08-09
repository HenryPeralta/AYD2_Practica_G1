const { getConnection } = require('../confing/db');

// Programar una nueva cita
// Programar una nueva cita
exports.programarCita = async (req, res) => {
  const { cui, fecha, hora } = req.body;

  try {
    const connection = await getConnection();
    
    // Verificar si el CUI existe en la tabla clientes
    const [rows] = await connection.query('SELECT cui FROM clientes WHERE cui = ?', [cui]);
    
    if (rows.length === 0) {
      return res.status(400).json({ error: 'El CUI no existe en la base de datos' });
    }

    // Insertar la cita
    const query = 'INSERT INTO citas (cui, fecha, hora) VALUES (?, ?, ?)';
    const [result] = await connection.query(query, [cui, fecha, hora]);

    res.status(201).json({ message: 'Cita programada con éxito', id: result.insertId });
  } catch (error) {
    console.error('Error al programar la cita:', error);
    res.status(500).json({ error: 'Error al programar la cita' });
  }
};


// Reprogramar una cita existente
exports.reprogramarCita = async (req, res) => {
  const { id, fecha, hora } = req.body;
  console.log(req.body.id, req.body.fecha, req.body.hora)
  try {
    const connection = await getConnection();
    const query = 'UPDATE citas SET fecha = ?, hora = ? WHERE id = ?';

    connection.query(query, [fecha, hora, id], (error, results) => {
      if (error) {
        console.error('Error al reprogramar la cita:', error);
        return res.status(500).json({ error: 'Error al reprogramar la cita' });
      }

      res.status(201).json({ message: 'Cita reprogramada con éxito', id: results.insertId });
    });

  } catch (error) {
    console.error('Error al obtener la conexión:', error);
    res.status(500).json({ error: 'Error al conectar a la base de datos' });
  }
};

// Obtener clientes con citas
exports.getClientesConCitas = async (req, res) => {
  try {
    const connection = await getConnection();
    const query = `
      SELECT clientes.cui, clientes.nombre, clientes.apellido, citas.id, citas.fecha, citas.hora 
      FROM clientes 
      LEFT JOIN citas ON clientes.cui = citas.cui
    `;
    const [results] = await connection.query(query);

    const clientes = results.reduce((acc, row) => {
      const cliente = acc.find(c => c.cui === row.cui);
      if (cliente) {
        if (row.fecha) {
          cliente.citas.push({ fecha: row.fecha, hora: row.hora, id: row.id });
        }
      } else {
        acc.push({
          cui: row.cui,
          nombre: row.nombre,
          apellido: row.apellido,
          citas: row.fecha ? [{ fecha: row.fecha, hora: row.hora, id: row.id }] : []
        });
      }
      return acc;
    }, []);

    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes con citas:', error);
    res.status(500).json({ error: 'Error al obtener clientes con citas' });
  }
};