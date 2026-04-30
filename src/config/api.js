require("dotenv").config();
const request = require("supertest");

const BASE_URL = process.env.BASE_URL;

module.exports = {
  request,
  BASE_URL
};