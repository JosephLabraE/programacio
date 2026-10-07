const express = require('express');
const app = express();
const usuarioRouter = require('./routes/usuario');

app.use('/usuario', usuarioRouter);

app.listen(3002, () =>{
    console.log("Servidor escuchando en el puerto 3001 http://localhost:3002");
    
})