import app from "../../app.js";
import request from "supertest";
import mockdata from "../mock-data/new-todo.json";
const endpointUrl = "/todos";

describe("createTodo", () => {
  it("POST" + endpointUrl, async () => {
    const response = await request(app).post(endpointUrl).send({
      mockdata,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(mockdata.title);
    expect(response.body.done).toBe(mockdata.done);
  });
});
