import "mocha";

import * as assert from "assert";
import Todo_Model from "../app/Models/Todo.model";

const app = require("../app/server");
const request = require("supertest");
const should = require("should");

// describe("Test command", () => {
//   it("this is test", () => {
//     assert(2 + 4 === 6);
//   });
// });

// Get Todo
describe("Get Todo", () => {
  it("Get all Todos coreclty", async () => {
    const response = await request(app).get("/todo/api/v1.0/tasks");
    assert(response.status === 200);
  });
});

// Post
describe("Post Todo", () => {
  it("Post a new Todo", function(done) {
    request(app)
      .post("/todo/api/v1.0/tasks")
      .send({
        title: "test_title",
        description: "test_description"
      })
      .then(res => {
        res.statusCode.should.eql(200);
        done();
      })
      .catch(done);
  });
});
