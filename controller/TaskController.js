const req = require("express/lib/request");
const res = require("express/lib/response");
 
const Task = require("../models/Task")

const getALLTasks = async(req, res) => {
   try {
     const tasksList = await Task.find();
     return res.render("index", {tasksList});
   } catch (error) {
    res.status(500).send({error: err.message});
    }
    
};

const createTask = async (req,res) =>{
   const task = req.body;

   if(!task.task){
     return res.redirect("/")
   }
   
   try{
     await Task.create(task)
     return res.redirect("/")
   } catch (err){
     res.status(500).send({error: err.message})
   }
  };

module.exports = {
  getALLTasks,
  createTask
};