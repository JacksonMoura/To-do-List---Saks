const routes = require("express").Router();
const { route } = require("next/dist/server/router");
const taskcontroller = require("../controller/TaskController")

routes.get("/", taskcontroller.getALL)

module.exports = routes