const mysql = require('mysql2/promise');

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DBHOST,
      database: process.env.DB1,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
    });

    console.log('CONEXION EXITOSA');
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
};

let connection;

const getConnection = async () => {
  if (!connection) {
    connection = await createConnection();
  }
  return connection;
};

module.exports = {
  getConnection,
};
