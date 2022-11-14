import Router from '@koa/router'

const exemples = new Router()
const todos = [
    {
        id: 1,
        title: "Faire le ménage",
        status: true
    },
    {
        id: 2,
        title: "Faire les courses",
        status: false
    }, {
        id: 3,
        title: "Etendre la lessive",
        status: false
    },
]

exemples.get('/', (ctx) => {
    ctx.body = todos
})

exemples.get('/:id', (ctx) => {
    const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
    ctx.body = todo
})

exemples.post('/', (ctx) => {
    const newTodo = {
        id: todos.length + 1,
        title: ctx.request.body.title,
        status: false
    }
    todos.push(newTodo);
    ctx.status = 201;
})

exemples.delete('/:id', (ctx) => {
    const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
    todos.splice(todo, 1)
    ctx.status = 200;
    ctx.body = todos
})

exemples.put('/:id', (ctx) => {
    const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
    todo.title = ctx.request.body.title;
    ctx.body = todos
})


export default exemples