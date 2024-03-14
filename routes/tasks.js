const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task");

router.get("/", getAllTask);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
