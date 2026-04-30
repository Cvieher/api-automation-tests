const casosLoginError = [
  {
    nombre: "usuario incorrecto",
    data: { username: "usuario_fake", password: "emilyspass" }
  },
  {
    nombre: "password incorrecta",
    data: { username: "emilys", password: "wrongpassword" }
  },
  {
    nombre: "campos vacíos",
    data: { username: "", password: "" }
  }
];

module.exports = casosLoginError;