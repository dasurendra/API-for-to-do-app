import mongoose from "mongoose";

const TaskListSchemea = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      default: "dfzd",
    },
    hr: {
      type: Number,
      required: [true, "Please provide the task"],
      default: 0,
    },
    todo: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const TaskList = mongoose.model("Task_list", TaskListSchemea);

export default TaskList;
