const express = require('express');
const { faker }= require('@faker-js/faker');

const router = express.Router();


router.get('/', (req, res) =>{
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

router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

// http://localhost:3000/api/v1/products/id
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'update',
    data: body,
    id,
  });
});

// http://localhost:3000/api/v1/products/id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'update',
    data: body,
    id,
  });
});

// http://localhost:3000/api/v1/products/122
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});


module.exports = router;
