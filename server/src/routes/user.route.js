const express = require('express');
const router =express.Router();

const usuario = {
    nombre: 'Prueba',
    apellido: 'Prueba2'
}

router.get('/', (req,res) => {
    res.json(usuario)
});