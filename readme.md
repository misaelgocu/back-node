

---

# 🚀 Guía de Configuración: Express API Profesional

A continuación, se detallan los comandos de instalación y las herramientas recomendadas para construir un backend robusto y escalable.

## 🛠️ Instalación de Dependencias

### Entorno de Desarrollo

Instalamos herramientas de productividad, formateo y linter para asegurar un **código limpio y mantenible**.

```bash
pnpm add nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

```

### Núcleo de la Aplicación

Dependencias esenciales para la ejecución de la API y generación de datos.

```bash
pnpm add express @faker-js/faker @hapi/boom joi

```

---

## 🔗 Referencias de Librerías Core

| Librería | Descripción | Documentación |
| --- | --- | --- |
| **Express** | Framework web minimalista para Node.js. | [Official Docs](https://expressjs.com/) |
| **Faker** | Generación de datos masivos para pruebas. | [Faker.js Guide](https://fakerjs.dev/) |
| **Boom** | Manejo de errores HTTP semánticos. | [Boom GitHub](https://github.com/hapijs/boom) |
| **Joi** | Validación de esquemas de datos poderosa. | [Joi.dev](https://joi.dev/), [doc](https://medium.com/@diego.coder/validaci%C3%B3n-de-datos-y-estructuras-en-node-js-con-joi-a157cfc6c4bf#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1NDRkMGZmMDU5MGYwMjUzMDE2NDNmMzI3NWJmNjg3NzY3NjU4MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDc0NTcwNDU3MzIxMjY5MjQ3MTUiLCJlbWFpbCI6Im1pc2FlbGdvbWV6MDAwMDBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoibm90X3Byb3ZpZGVkIiwibmJmIjoxNzY5MTE2MDU0LCJuYW1lIjoibWlzYWVsIGdvbWV6IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0t3SEZFNmVydmtPYl93Sk9ScGlFcWNHLXQ5SFFNaEVUUVcxMlZDT1hWaUxWREd1YXZYPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Im1pc2FlbCIsImZhbWlseV9uYW1lIjoiZ29tZXoiLCJpYXQiOjE3NjkxMTYzNTQsImV4cCI6MTc2OTExOTk1NCwianRpIjoiZGEzNTI4OTNlY2IzOTBkOGFiYzIzYzg3NGE2MTUwZmRhMGZmMTkxYyJ9.gfuUkZUGZKrO3UrOGBAJ-b9LPmjX-ViINB8bHXdAAAypXmCa2F2nn43uPqJhYblQz2mHXp2yjbY0BouVeZE-Cbd1dVce5w3oqBtc-OzZJ20k8q8RHxKWrTT_I36v046iL3nofoqiPqHgj42l3eRG4aC40tX2iberQ_2EnJBM9ZUNhuZ6IPGWZ4HUwEAIAC2YYu6H_JLP5s6PuMpvfKBQaoXB5tf8y_8ti0ooEnHCHZdqk3Y2K2yRnIQeofEtjuHUMFtolqR14x_DJmWFMaIEKvS5Om4DmVN5d2xbZ1Bt3Ms3PcztWjrlHUm6iyB5O3LH9IHfHjVWeOLB7vX5Of8Nlw) |

---

## 🛡️ Middlewares Populares para Express

Los middlewares son capas fundamentales en el ciclo de vida de una petición HTTP. Aquí tienes los más destacados para producción:

### 🌐 [CORS](http://expressjs.com/en/resources/middleware/cors.html)

Middleware indispensable para habilitar el **Intercambio de Recursos de Origen Cruzado**, permitiendo que tu frontend se comunique con tu backend sin bloqueos de seguridad del navegador.

### 📝 [Morgan](http://expressjs.com/en/resources/middleware/morgan.html)

Un **logger de solicitudes HTTP**. Esencial en desarrollo para ver en consola qué rutas se están consultando y cuánto tardan en responder.

### ⛑️ [Helmet](https://github.com/helmetjs/helmet)

Añade una capa de seguridad configurando diversos **encabezados HTTP**. Ayuda a prevenir ataques comunes como XSS y Clickjacking.

### 🕵️ [Express Debug](https://github.com/devoidfury/express-debug)

Facilita el **debugging** mediante una barra de herramientas visual durante la etapa de desarrollo.

### 📍 [Express Slash](https://github.com/ericf/express-slash)

Optimiza el enrutamiento permitiendo que las rutas funcionen igual con o sin el slash (`/`) final.

### 🔑 [Passport](http://www.passportjs.org/)

El estándar para **autenticación**. Permite implementar estrategias como JWT, Google, Facebook o Login local de forma modular.

---

> 💡 **Tip de Arquitecto:** Puedes encontrar el catálogo completo de middlewares mantenidos por el equipo de Express en la [Documentación Oficial de Recursos](http://expressjs.com/en/resources/middleware.html).
