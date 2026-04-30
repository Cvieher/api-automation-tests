const apiClient = require("../../src/client/apiClient");

const auth = require("../../src/helpers/auth.helper");

const casosLoginError = require("../../test-data/login.error.data");

describe("Auth API - Negative tests", () => {
  casosLoginError.forEach((caso) => {
    test("login incorrecto", async () => {
      const res = await auth.login("emilys", "wrongpass");

      //console.log(res.status);
      //console.log(res.body);

      expect([400, 401, 404]).toContain(res.status);
      expect(res.body).toHaveProperty("message");
    });
  });
});
