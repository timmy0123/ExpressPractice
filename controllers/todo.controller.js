import TodoModel from "../model/todo.model";
export const createTodo = (req, res) => {
  TodoModel.create(req.body);
};
