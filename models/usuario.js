var mongoose = require('mongoose');
var uniqueValidator = require("mongoose-unique-validator");

var Schema = mongoose.Schema;

var RolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE', 'EXECUTIVE_ROLE'],
    message: "{VALUE} no esta permitido",
};

var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, unique: true, required: [true, 'El correo es obligatorio'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: RolesValidos },

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);