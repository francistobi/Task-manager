const Task = require("../models/Task");
const getAllTask = async (req, res) => {  
  try {
  const task = await Task.find({});
  res.status(200).json({ task });
} catch (error) {
  res.status(500).json({ msg: error });
}};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with id:${taskID}`});
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.updateOne();
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send("task updated successfully");
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.deleteOne();
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send("task deleted successfully");
};

module.exports = {
  getAllTask,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
