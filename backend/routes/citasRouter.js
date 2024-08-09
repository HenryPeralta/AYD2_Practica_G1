const express = require('express');
const router = express.Router();
const citasHandler = require('../handler/citasHandler');

// Rutas para manejar citas
router.post('/programar', citasHandler.programarCita);
router.post('/reprogramar', citasHandler.reprogramarCita);
router.get('/clientes', citasHandler.getClientesConCitas); 

module.exports = router;

