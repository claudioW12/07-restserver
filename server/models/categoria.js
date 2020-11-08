const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Usuario = require('../models/usuario');

let estadosValidos = {
    values: [true, false],
    message: '{VALUE} no es un estado válido'
}

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La categoría es necesaria'],
        trim: true,
        lowercase: true
    },
    tipo: {
        type: String,
        required: [true, 'El tipo es necesario'],
        trim: true,
        lowercase: true
    },
    estado: {
        type: Boolean,
        default: true,
        enum: estadosValidos
    },
    usuarioID: {
        type: String,
        required: [true, 'El Usuario es necesario']
    },
});

categoriaSchema.methods.toJSON = function() {
    let cat = this;
    let catObject = cat.toObject();
    return catObject;
}

categoriaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser única' });

module.exports = mongoose.model('Categoria', categoriaSchema);