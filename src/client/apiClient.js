const request = require("supertest");
const { BASE_URL } = require("../config/api");
const auth = require("../helpers/auth.helper");

const apiClient = {
  get: (endpoint) => {
    return request(BASE_URL)
      .get(endpoint)
      .set("Authorization", `Bearer ${auth.getToken()}`);
  },

  post: (endpoint, body) => {
    return request(BASE_URL)
      .post(endpoint)
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${auth.getToken()}`)
      .send(body);
  },
};

module.exports = apiClient;
