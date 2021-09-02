import mongoose from "mongoose";

const mongoClient = async () => {
  try {
    console.log("connecting mongodb");
    const mongoUrl = "mongodb://localhost:27017/a_task_list";
    const con = await mongoose.connect(mongoUrl);

    if (con) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
