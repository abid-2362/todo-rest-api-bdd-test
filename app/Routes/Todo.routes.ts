import TodoController from '../Controllers/Todo.controller';
import * as Express from 'express';
export default class TodoRoutes {
  private todoController: TodoController;
  constructor() {
    this.todoController = new TodoController();
  }

  public routes(app: Express.Application) {
    // to create a new task, post request
    app.route('/tasks').post(this.todoController.createNewTask)

    // to retrieve all tasks, get request
    app.route('/tasks').get(this.todoController.getAllTasks);

    // get task by id.
    app.route('/tasks/:id').get(this.todoController.getTaskById);

    // update an existing task
    app.route('/tasks/:id').put(this.todoController.updateTask);

    // delete task
    app.route('/tasks/:id').delete(this.todoController.deleteTask);
  }
}