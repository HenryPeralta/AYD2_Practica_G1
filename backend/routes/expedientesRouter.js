const express = require('express');
const router = express.Router();
const expedientesHandler = require('../handler/expedientesHandler');

router.post('/', expedientesHandler.uploadExpediente);

module.exports = router;