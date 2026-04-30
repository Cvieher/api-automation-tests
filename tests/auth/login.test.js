const { request, BASE_URL } = require("../../src/config/api");
const auth = require("../../src/helpers/auth.helper");

describe("Auth API tests", () => {
  test("login correcto", async () => {
    const res = await auth.login("emilys", "emilyspass");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("accessToken");
    expect(res.body.accessToken.split(".").length).toBe(3);
  });
});
