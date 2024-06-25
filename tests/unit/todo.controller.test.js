import { createTodo } from "../../controllers/todo.controller";
import TodoModel from "../../model/todo.model";
import { createRequest, createResponse } from "node-mocks-http";
import mockdata from "../mock-data/new-todo.json";

TodoModel.create = jest.fn();
let req, res;

beforeEach(() => {
  req = createRequest();
  res = createResponse();
  req.body = mockdata;
});

describe("createTodo", () => {
  beforeEach(() => {
    req.body = mockdata;
  });
  it("should create a new todo", () => {
    expect(typeof createTodo).toBe("function");
  });
  it("should call TodoModel.create", () => {
    createTodo(req, res);
    // cannot use toHaveBeenCalled if jest.fn is not called
    expect(TodoModel.create).toBeCalledWith(mockdata);
  });
  it("should return 201 code", async () => {
    await createTodo(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it("should return json body in response", async () => {
    TodoModel.create.mockResolvedValue(mockdata);
    await createTodo(req, res);
    expect(res._getJSONData()).toStrictEqual(mockdata);
  });
});
