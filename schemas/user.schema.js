const userSchema = {
  type: "object",
  required: ["id", "firstName", "lastName", "email"],
  properties: {
    id: { type: "number" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" }
  }
};

module.exports = userSchema;