const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 1. Definimos la lista de dominios permitidos (Whitelist)
const whitelist = [
  'http://localhost:8080',
  'http://localhost:3000',
  'https://mi-tienda-online.com'
];

// 2. Configuración de opciones de CORS
const options = {
  origin: (origin, callback) => {
    // Permitimos peticiones sin origen (como Postman o el mismo servidor)
    // o si el origen está en la whitelist
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso denegado por políticas de CORS'));
    }
  }
};

// 3. Aplicamos el middleware con las opciones configuradas
app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hola, mi servidor en Express está protegido con CORS');
});

routerApi(app);

// Middlewares de error (Siempre después de las rutas)
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
