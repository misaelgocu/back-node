const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res, next) => {
 try {
   const { id } = req.params;
  const product = await service.findOne(id);
  if (!product) {
    return res.status(404).json({ message: 'product not found' });
  }
  res.json(product);
 } catch (error) {
  next(error);
 }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

// PATCH: Actualización parcial - Ahora sí llama al servicio
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// DELETE: Ahora sí elimina del array
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await service.delete(id);
    res.json(answer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
