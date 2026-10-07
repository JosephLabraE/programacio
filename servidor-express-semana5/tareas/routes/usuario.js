const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Hola mundo desde express");
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    res.send(`Detalle del usuario con ID: ${id}`);
})

module.exports = router