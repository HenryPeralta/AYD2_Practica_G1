const express = require('express');
const router = express.Router();
const clientesHandler = require('../handler/clientesHandler');

router.get('/', clientesHandler.getClientes);

// Rutas para manejar clientes
router.post('/agregar', clientesHandler.agregarClientes);


module.exports = router;
