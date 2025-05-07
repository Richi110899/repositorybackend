require('dotenv').config();
const http = require('http');
const express = require('express');

// Inicializar Express
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Crear el servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log("Aplicación corriendo en: " + PORT);
});
