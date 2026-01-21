const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) =>{
  res.send('Hola mi server en express');
});

app.get('/nuevo-endpoint', (req, res) => {
  res.json({
    id: 1,
    nombre: 'Producto de ejemplo',
    precio: 25.99,
    disponible: true
  });
});

app.listen(port, () =>{
  console.log('Mi port: ' + port);
});


