const Tasks = require('../models/Tasks')

const getAllTask = (req , res) => {
  res.send("Getting all task")
}

const createTask = async (req , res) => {
  const task = await Tasks.create(req.body)
  res.status(201).json(task)
}

const getSingleTask = (req , res) => {

  res.json({id : req.params.id , msg : "Single Task"})
}

const updateTask = (req , res) => {
  res.json({id : req.params.id, msg : 'Task Updated'})
}

const deleteTask = (req , res) => {
  res.json({id : req.params.id , msg : 'Task deleted'})
}

module.exports = {getAllTask, createTask , getSingleTask , updateTask , deleteTask}
