const req = require("express/lib/request");
const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const { update } = require("../models/Task");
 
const Task = require("../models/Task")

const getALLTasks = async(req, res) => {
   try {
     const tasksList = await Task.find();
     return res.render("index", {tasksList, task: null, taskDelete: null});
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

  
  const getById = async (req,res) => {

  try {
    
    
    
    const tasksList = await Task.find();
    if(req.params.method == update){
      const task = await Task.findOne({_id:req.params.id})
      res.render("index",{task, taskDelete: null,  tasksList})
    } else {
      const taskDelete = await Task.findOne({_id:req.params.id})
      res.render("index",{task: null, taskDelete,  tasksList})
    }
    
  } catch (error) {
    res.status(500).send({error: err.message})
  }
  
    const task = await Task.findOne({_id:req.params.id})
    const tasksList = await Task.find();
    res.render("index",{task,tasksList})
  }

  const updateOneTask = async (req ,res) =>  {
   
   try {
    const task = req.body;

    await Task.updateOne ({_id:req.params.id}, task)
    res.redirect("/")
   } catch (error) {
    res.status(500).send({error: err.message})
   }
   
  
  }

const deleteOneTask = async (req, res) => {
try {
  await Task.deleteOne({_id:req.params.id})
  res.redirect("/");
} catch (error) {
  res.status(500).send({error: err.message});
};


}

  

module.exports = {
  getALLTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,


};