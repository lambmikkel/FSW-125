const express = require("express");
const routes = express.Router();
const bountyRouter = require("../bountyRouter")

routes.use(bountyRouter)

module.exports = routes