import Todo from "../Models/Todo.model";
import { Request, Response } from "express";

export default class TodoController {
  public createNewTask(req: Request, res: Response) {
    let newTodo = new Todo();
    newTodo.title = req.body.title;
    newTodo.description = req.body.description;
    newTodo.save((err, todo) => {
      if (err) res.send(err);

      res.send(todo);
    });
  }

  public getAllTasks(req: Request, res: Response) {
    let query = Todo.find();
    query.select("_id title description done");
    query.exec((err, todos) => {
      if (err)
        res.send({ status: 'error', message: 'Error in fetching your result'})
      else if(todos.length === 0)
        res.send({ status: 'error', message: 'No tasks found'});
      else
        res.send(todos);
    });
  }

  public getTaskById(req: Request, res: Response) {
    let taskId = req.params.id;
    let query = Todo.findById(taskId);
    query.select("_id title description done");
    query.exec((err, todo) => {
      if (err)
        res.send({ status: 'error', message: 'Error in fetching your result'})
      else if(todo === null) {
        res.send({ status: 'error', message: 'No task found'} );
      } else {
        res.send(todo);
      }
    });
  }

  public deleteTask(taskId: string) {
    // ...
  }

  public updateTask(taskId: string) {
    // ...
  }
}
