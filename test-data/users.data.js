const casosUsers = [
  {
    nombre: "usuario válido",
    endpoint: "/users/1",
    expectedStatus: 200
  },
  {
    nombre: "usuario inexistente",
    endpoint: "/users/999999",
    expectedStatus: 404
  }
];

module.exports = casosUsers;