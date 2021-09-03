import Taskschema from "./TaskList.schema.js";

//create Task
// export const inserTask = (newTask) => {
//   return new Promise((resolve, reject) => {
//     console.log(newTask, "from models");
//     Taskschema(newTask)
//       .save()
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });

export const inserTask = async (newTask) => {
  try {
    const data = await Taskschema(newTask).save();
    return data;
  } catch (error) {
    return error;
  }
};

//read all task
export const readTask = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Taskschema.find();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

//get single task

//update task

//delete task
