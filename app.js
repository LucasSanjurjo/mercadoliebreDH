const express = require('express');
const resolve = require('path');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname,'./public')));

app.listen(process.env.PORT || 3000,() => { console.log('Servidor corriendo, puerto 3000');});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./views/home.html'))
} );

app.get('/registro', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./views/register.html'))
} );

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./views/login.html'))
} );