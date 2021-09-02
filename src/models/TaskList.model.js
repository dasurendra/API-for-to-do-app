import Taskschema from "./TaskList.schema.js";

//create Task
export const inserTask = (newTask) => {
  return new Promise((resolve, reject) => {
    console.log(newTask, "from models");
    Taskschema(newTask)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//read all task

//get single task

//update task

//delete task
