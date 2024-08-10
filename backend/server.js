require('dotenv').config(); // Carga las variables de entorno del archivo .env
const { json, urlencoded } = require('express');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors
const citasRouter = require('./routes/citasRouter');
const expedientesRouter = require('./routes/expedientesRouter');
const clientesRouter = require('./routes/clientesRouter');
const { getConnection } = require('./confing/db');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ limit: '50mb', extended: true }));

// Configura CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000' // Permite solicitudes desde esta URL
}));

app.use(bodyParser.json());

// Rutas
app.use('/api/citas', citasRouter);
app.use('/api/expedientes', expedientesRouter);
app.use('/api/clientes', clientesRouter);

// Inicialización de la base de datos
getConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });
