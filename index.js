const express = require('express');
const { faker }= require('@faker-js/faker');

const app = express();
const port = 3000;


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

app.get('/products', (req, res) =>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(let i =0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.avatar(),
    });
  }
  res.json(products);
});

app.listen(port, () =>{
  console.log('Mi port: ' + port);
});


