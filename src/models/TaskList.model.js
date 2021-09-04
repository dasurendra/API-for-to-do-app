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
export const getAlTasks = () => {
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
export const getATask = async (_id) => {
  try {
    const result = await Taskschema.findById(_id);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//update task
export const updateTask = async ({ id, todo }) => {
  try {
    const result = await Taskschema.findByIdAndUpdate(id, {
      todo,
    });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//delete task

export const deleteTasks = async (ids) => {
  try {
    const result = await Taskschema.deleteMany({
      _id: {
        $in: ids,
      },
    });

    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//single delete
// export const deleteTasks = async (ids) => {
//   try {
//     const result = await Taskschema.deleteOne(ids); //sin gle delete

//     return result;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };
