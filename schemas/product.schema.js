const Joi = require('joi');

// Definición de tipos de datos individuales (Atómicos)
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15); // Nota: quité alphanum por si el producto tiene espacios
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

// Esquema para la creación (Todos los campos requeridos)
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

// Esquema para la actualización (Campos opcionales)
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

// Esquema para obtener o eliminar (Solo el ID)
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
};
