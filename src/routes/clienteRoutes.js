const express = require('express');
const router = express.Router();
const ClienteController = require ('../controllers/ClienteController');

// Ruta para obtener todos los usuarios
router.get('/clientes', ClienteController.getAllClientes);

// Ruta para obtener un usuario por ID
router.get('/clientes/:id', ClienteController.getClienteById);

// Ruta para crear un nuevo usuario
router.post('/clientes', ClienteController.createCliente);

// Ruta para actualizar un usuario por ID
router.put('/clientes/:id', ClienteController.updateCliente);

// Ruta para eliminar un usuario por ID
router.delete('/clientes/:id', ClienteController.deleteCliente);

module.exports = router;
