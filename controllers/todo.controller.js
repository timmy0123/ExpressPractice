import TodoModel from "../model/todo.model";
export const createTodo = async (req, res) => {
  const todo = await TodoModel.create(req.body);
  res.status(201).json(todo);
};
