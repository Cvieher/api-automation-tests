const apiClient = require("../../src/client/apiClient");
const casosUsers = require("../../test-data/users.data");

const Ajv = require("ajv");
const ajv = new Ajv();

const userSchema = require("../../schemas/user.schema");

describe("Users API - Data Driven tests", () => {
  casosUsers.forEach((caso) => {
    test(`GET ${caso.nombre}`, async () => {
      const response = await apiClient.get(caso.endpoint);

      expect(response.status).toBe(caso.expectedStatus);

      if (response.status === 200) {
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("email");
      }
    });
  });
  test("usuario válido cumple schema", async () => {
    const res = await apiClient.get("/users/1");

    const validate = ajv.compile(userSchema);
    const valid = validate(res.body);

    //console.log(validate.errors);

    expect(valid).toBe(true);
  });
});
