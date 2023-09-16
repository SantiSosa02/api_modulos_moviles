const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono:{
    type: Number,
    required:true,
  },
  estado: {
    type: String,
    default: 'Activo'
  },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
