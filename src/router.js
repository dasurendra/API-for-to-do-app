import express from "express";
const router = express.Router();
import {
  inserTask,
  getAlTasks,
  getATask,
  deleteTasks,
  updateTask,
} from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got it hit");
  // res.send("ok");
  next();
});
//returns all the task
router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;
  let result = null;
  if (_id) {
    result = await getATask(_id);
  } else {
    result = await getAlTasks();
  }
  res.json({
    message: "return from get",
    result,
  });
});

//return single task by using id

// router.get("/:_id", async (req, res) => {
//   const { _id } = req.params;
//   const result = await getATask(_id);
//   console.log(_id);
//   //call database

//   res.json({
//     status: "sucess",
//     message: result._id ? "Task found" : "Task not found",
//     result,
//   });

//   res.json({ message: "return frm single task", result });
// });

//recive new task  and stores in database
router.post("/", async (req, res) => {
  try {
    const result = await inserTask(req.body);
    res.json({
      status: "Sucess",
      message: "return from post",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Unable to submit task,please try again later",
      result,
    });
  }
});

//update the data in database
router.patch("/", async (req, res) => {
  console.log(req.body);

  const result = await updateTask(req.body);
  console.log(result);
  res.json({
    message: "return from patch",
    result,
  });
});

//delete data based on th id recived
router.delete("/", async (req, res) => {
  console.log(req.body);
  const result = await deleteTasks(req.body.ids);
  console.log(result);
  if (result?.deletedCount > 0) {
    return res.json({
      status: "Sucess",
      message: "The Task has been deleted",
    });
  }
  res.json({
    status: "error",
    message: "Unable to delte task this time,please try again later",
  });
});

export default router;
