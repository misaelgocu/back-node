const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;
app.use(express.json());


app.get('/', (req, res) =>{
  res.send('Hola mi server en express');
});

app.get('/nuevo-endpoint', (req, res) => {
  res.json([
    {
    id: 1,
    nombre: 'Producto de ejemplo',
    precio: 25.99,
    disponible: true
  },
  {
    id: 2,
    nombre: 'Producto de ejemplo 2',
    precio: 25.99,
    disponible: true
  }
  ]);
});



routerApi(app);


app.listen(port, () =>{
  console.log('Mi port: ' + port);
});


