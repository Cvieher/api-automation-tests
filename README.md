# API Automation Tests Framework

Framework de automatización de pruebas API desarrollado con JavaScript, Jest y Supertest.  
El objetivo del proyecto es validar endpoints REST de forma estructurada mediante tests organizados y reutilizables.

---

## Objetivo del proyecto

Este proyecto tiene como finalidad practicar y consolidar conocimientos en:

- Testing de APIs REST
- Uso de Jest como framework de testing
- Uso de Supertest para peticiones HTTP
- Diseño de tests data-driven
- Validación de esquemas de respuesta
- Estructura modular de proyectos de testing

---

## Tecnologías utilizadas

- Node.js
- Jest
- Supertest
- dotenv
- AJV (validación de JSON Schema)

---

## Funcionalidades implementadas

### Auth
- Login correcto con validación de token
- Tests de errores de login (credenciales inválidas, campos obligatorios)

### Users
- Tests data-driven para endpoints de usuarios
- Validación de respuestas HTTP
- Validación de schema con AJV

---

## Ejecución de tests

Instalar dependencias:

    npm install

Ejecutar tests:
    npm test

---

## Variables de entorno

El proyecto utiliza un archivo .env:

BASE_URL=https://dummyjson.com

---

## Estado del proyecto

Versión actual: v1.0
Estado: funcional y estable

---

## Notas

Este proyecto está en evolución. La estructura está diseñada para escalar fácilmente añadiendo nuevos módulos de testing.