const Tasks = require("../models/Tasks");

const getAllTask = async (req, res) => {
  try {
    const result = await Tasks.find({});
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const result = await Tasks.findOne({ _id: req.params.id });
    if (!result) {
      res.status(404).json({ msg: `No task with Id ${req.params.id}` });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: id } = req.params;
    const result = await Tasks.updateOne({
      _id: id,
      name: req.body.name,
      completed: req.body.completed,
    });
    if (!result) {
      res.status(404).json({ msg: "Error in updating the data" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: id } = req.params;
    const result = await Tasks.remove({ _id: id });
    if (!result) {
      res.status(404).json({ message: `No task with ${id} to delete` });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
