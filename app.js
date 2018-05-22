// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar Variables
var app = express();

//Conexion a la Base de Datos
mongoose.connection.openUri('mongodb://localhost:27017/OCRApp', (err, res) => {
    if (err) throw err;
    console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
});

//Rutas
app.get('/', (req, res, next) => {
    res.status(306).json({
        ok: true,
        mensaje: 'Peticion realizada con exito'
    });
});

// Escuchar Peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});