const routes = require("express").Router();
const { route } = require("next/dist/server/router");
const taskcontroller = require("../controller/TaskController")

routes.get("/", taskcontroller.getALLTasks)
routes.post("/create", taskcontroller.createTask);
routes.get("/getById/:id/:method",taskcontroller.getById);
routes.post("/updateOne/:id", taskcontroller.updateOneTask);
routes.get("/deleteOne/:id",taskcontroller.deleteOneTask);

module.exports = routes