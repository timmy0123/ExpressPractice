import { createTodo } from "../../src/controllers/todo.controller";

describe("createTodo", () => {
  it("should create a new todo", async () => {
    const todo = await createTodo({ name: "Test Todo", isDone: false });
    expect(todo.name).toBe("Test Todo");
    expect(todo.isDone).toBe(false);
  });
});
