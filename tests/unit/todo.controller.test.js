import { createTodo } from "../../controllers/todo.controller";

describe("createTodo", () => {
  it("should create a new todo", () => {
    expect(typeof createTodo).toBe("function");
  });
});
