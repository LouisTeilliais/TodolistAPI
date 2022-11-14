import Router from '@koa/router'
import * as TaskController from "#components/task/task-controllers.js";


const tasks = new Router();

tasks.get('/', TaskController.getAllTasks)

tasks.post('/', TaskController.createTask)

tasks.get('/:id', TaskController.findTask)

tasks.delete('/:id', TaskController.deleteTask)

tasks.put('/:id', TaskController.updateTask)

export default tasks