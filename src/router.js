import express from "express";
const router = express.Router();
import { inserTask, readTask } from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got it hit");
  // res.send("ok");
  next();
});
//returns all the task
router.get("/", async (req, res) => {
  try {
    const output = await readTask();

    res.json({
      status: "sucess",
      message: "return from get",
      output,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "return from get",
      output,
    });
  }
});

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
router.patch("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "return from patch",
  });
});

//delete data based on th id recived
router.delete("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "return from delete",
  });
});

export default router;
