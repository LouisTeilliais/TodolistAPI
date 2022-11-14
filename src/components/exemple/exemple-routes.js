import Router from '@koa/router'
import * as ExempleController from "#components/exemple/exemple-controllers.js";

const exemples = new Router()

exemples.get('/', ExempleController.index)

exemples.post('/', ExempleController.create)

// exemples.get('/:id', (ctx) => {
//     const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
//     ctx.body = todo
// })


// exemples.delete('/:id', (ctx) => {
//     const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
//     todos.splice(todo, 1)
//     ctx.status = 200;
//     ctx.body = todos
// })

// exemples.put('/:id', (ctx) => {
//     const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
//     todo.title = ctx.request.body.title;
//     ctx.body = todos
// })


export default exemples
