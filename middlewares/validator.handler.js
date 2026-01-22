const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  // Closure: retorna un middleware dinámicamente
  return (req, res, next) => {
    const data = req[property]; // property puede ser 'body', 'params' o 'query'
    const { error } = schema.validate(data, { abortEarly: false }); // abortEarly: false envía todos los errores juntos

    if (error) {
      next(boom.badRequest(error)); // Enviamos el error a nuestro BoomErrorHandler
    }
    next();
  };
}

module.exports = validatorHandler;
