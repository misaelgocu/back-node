const express = require('express');
const ProductsService = require('../services/product.service');

// Importamos el handler y los esquemas
const validatorHandler = require('../middlewares/validator.handler');
const { 
  createProductSchema, 
  updateProductSchema, 
  getProductSchema 
} = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

// GET all
router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET by id
// Primero validamos que el ID sea un UUID válido
router.get('/:id', 
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// POST create
// Validamos que el body cumpla con los requisitos (name, price, image)
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// PATCH update
// Doble validación: el ID en params y los cambios en el body
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// DELETE
router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const answer = await service.delete(id);
      res.json(answer);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;