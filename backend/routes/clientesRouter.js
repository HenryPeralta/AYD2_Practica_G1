const express = require('express');
const router = express.Router();
const clientesHandler = require('../controllers/clientesHandler');

router.get('/', clientesHandler.getClientes);

// Puedes agregar más rutas para manejar clientes si es necesario

module.exports = router;
