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

// Puedes agregar más funciones para manejar clientes si es necesario
