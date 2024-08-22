const express = require("express");
const router = express.Router();
const Task = require("../../models/Task");

//? Create a task
router.post("/", async (req, res) => {
  const taskObj = {
    taskName: req.body.taskName,
    dueDate: req.body.dueDate,
  };
  const task = new Task(taskObj);
  await task.save();
  res.status(201).json(task);
});

//? Get all task
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//? Get one task by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//? Update one task by ID
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const taskBody = req.body;
    const updatetask = await Task.findByIdAndUpdate(id, taskBody, {new: true});
    if (updatetask) {
      res.json(updatetask);
    } else {
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//? Delete one task by ID
router.delete('/:id', async(req, res)=>{
  try {
    const id = req.params.id
    const deletetask = await Task.findByIdAndDelete(id)
    if (deletetask){
      res.json({message: "task is deleted"})
    }else{
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
})

module.exports = router;