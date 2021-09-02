import mongoose from "mongoose";

const TaskListSchemea = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      default: "vdsfd",
    },
    hr: {
      type: Number,
      required: [true, "Please provide the task"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const TaskList = mongoose.model("Task_list", TaskListSchemea);

export default TaskList;
