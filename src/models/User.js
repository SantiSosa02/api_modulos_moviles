const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  contrasena: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: 'Activo',
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
