"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo_model_1 = require("../Models/Todo.model");
var TodoController = /** @class */ (function () {
    function TodoController() {
    }
    TodoController.prototype.createNewTask = function (req, res) {
        var newTodo = new Todo_model_1.default();
        newTodo.title = req.body.title;
        newTodo.description = req.body.description;
        newTodo.save(function (err, todo) {
            if (err)
                res.send(err);
            res.send(todo);
        });
    };
    TodoController.prototype.getAllTasks = function (req, res) {
        var query = Todo_model_1.default.find();
        query.select("_id title description done");
        query.exec(function (err, todos) {
            if (err)
                res.send({ status: 'error', message: 'Error in fetching your result' });
            else if (todos.length === 0)
                res.send({ status: 'error', message: 'No tasks found' });
            else
                res.send(todos);
        });
    };
    TodoController.prototype.getTaskById = function (req, res) {
        var taskId = req.params.id;
        var query = Todo_model_1.default.findById(taskId);
        query.select("_id title description done");
        query.exec(function (err, todo) {
            if (err)
                res.send({ status: 'error', message: 'Error in fetching your result' });
            else if (todo === null) {
                res.send({ status: 'error', message: 'No task found' });
            }
            else {
                res.send(todo);
            }
        });
    };
    TodoController.prototype.deleteTask = function (taskId) {
        // ...
    };
    TodoController.prototype.updateTask = function (taskId) {
        // ...
    };
    return TodoController;
}());
exports.default = TodoController;
//# sourceMappingURL=Todo.controller.js.map