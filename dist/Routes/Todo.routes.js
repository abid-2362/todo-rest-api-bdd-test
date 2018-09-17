"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo_controller_1 = require("../Controllers/Todo.controller");
var TodoRoutes = /** @class */ (function () {
    function TodoRoutes() {
        this.todoController = new Todo_controller_1.default();
    }
    TodoRoutes.prototype.routes = function (app) {
        // to create a new task, post request
        app.route('/tasks').post(this.todoController.createNewTask);
        // to retrieve all tasks, get request
        app.route('/tasks').get(this.todoController.getAllTasks);
        // get task by id.
        app.route('/tasks/:id').get(this.todoController.getTaskById);
        // update an existing task
        app.route('/tasks/:id').put(this.todoController.updateTask);
        // delete task
        app.route('/tasks/:id').delete(this.todoController.deleteTask);
    };
    return TodoRoutes;
}());
exports.default = TodoRoutes;
//# sourceMappingURL=Todo.routes.js.map