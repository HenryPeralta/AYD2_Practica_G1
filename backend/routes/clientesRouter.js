const express = require('express');
const router = express.Router();
const clientesHandler = require('../handler/clientesHandler');

router.get('/', clientesHandler.getClientes);

// Rutas para manejar clientes
router.post('/agregar', clientesHandler.agregarClientes);

// Ruta para obtener un cliente por CUI
router.get('/buscar/:cui', clientesHandler.getClientePorCui);

// Ruta para actualizar un cliente por CUI
router.put('/actualizar/:cui', clientesHandler.actualizarCliente);

module.exports = router;
