const request = require("supertest");
const BASE_URL = process.env.BASE_URL;

let token = null;

const login = async (username, password) => {
  const response = await request(BASE_URL)
    .post("/auth/login")
    .send({ username, password });

  token = response.body.accessToken;

  return response;
};
const getToken = () => token;
module.exports = { login , getToken};
