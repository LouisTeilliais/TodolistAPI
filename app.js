import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()
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

router
    .get('/todos', (ctx) => {
        ctx.body = todos
    })
    .get('/todos/:id', (ctx) => {
        const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
        ctx.body = todo
    })
    .post('/todos', (ctx) => {
        const newTodo = {
            id: todos.length + 1,
            title: ctx.request.body.title,
            status: false
        }
        todos.push(newTodo);
        ctx.status = 201;
        console.log(todos);
    })
    .delete('/todos/:id', (ctx) => {
        const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
        todos.splice(todo, 1)
        ctx.status = 200;
        ctx.body = todos
    })
    .put('/todos/:id', (ctx) => {
        const todo = todos.find(todo => parseInt(ctx.params.id) === todo.id)
        todo.title = ctx.request.body.title;
        ctx.body = todos
    })

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))
