const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTask = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
})

const getTaskById = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      const error = new Error
      error.status = 404
      return next(error)
      return res.status(404).json({ msg: `no task with id:${taskID}` });
    }
    res.status(200).json({ task });
})

const deleteTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with id:${taskID}` });
    }
    res.status(200).json({ task });
})

const updateTask =  asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `no task with id:${taskID}` });
    }
    res.status(200).json({ task })
})

module.exports = {
  getAllTask,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
