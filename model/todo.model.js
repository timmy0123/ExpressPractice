import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel;
