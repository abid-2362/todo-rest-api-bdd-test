import "mocha";

import * as assert from "assert";
import Todo_Model from "../app/Models/Todo.model";

const app = require("../app/server");
const request = require("supertest");

// describe("Test command", () => {
//   it("this is test", () => {
//     assert(2 + 4 === 6);
//   });
// });

describe("Get Todo", () => {
  it("Get all Todos coreclty", async () => {
    const response = await request(app).get("/todo/api/v1.0/tasks");
    assert(response.status === 200);
  });
});
