import Task from '#components/task/task-model.js'
import Joi from 'joi'


export async function getAllTasks(ctx) {

    try {
        ctx.body = await Task.find({})
    }
    catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function createTask(ctx) {

    try {
        const taskValidattionSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string(),
        })
        const { error } = taskValidattionSchema.validate(ctx.request.body)
        if (error) throw new Error(error)

        await Task.create({
            title: ctx.request.body.title,
            description: ctx.request.body.description,
            updatedAt: new Date(),
            createdAt: new Date()
        })
        ctx.body = "Created"
        ctx.status = 201
    }
    catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function findTask(ctx) {

    try {
        const taskId = Joi.object({
            id: Joi.string().required()
        })
        const { error } = taskId.validate({ id: ctx.params.id })
        if (error) throw new Error(error)

        ctx.body = await Task.findById(ctx.params.id)
        ctx.status = 200
    }
    catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function deleteTask(ctx) {

    try {
        const taskId = Joi.object({
            id: Joi.string().required()
        })
        const { error } = taskId.validate({ id: ctx.params.id })
        if (error) throw new Error(error)

        ctx.body = await Task.deleteOne({ id: ctx.params.id })
        ctx.status = 200
    }
    catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function updateTask(ctx) {
    try {
        const idValidation = Joi.object({
            id: Joi.string().required(),
            title: Joi.string(),
            status: Joi.boolean(),
            description: Joi.string(),
        });

        const { error } = idValidation.validate({
            id: ctx.params.id,
            title: ctx.request.body.title,
            status: ctx.request.body.status,
            description: ctx.request.body.description,
        });
        if (error) throw new Error(error);

        const updatedAt = {
            updatedAt: new Date(),
        };

        const task = await Task.findById(ctx.params.id, {
            title: ctx.request.body.title,
            status: ctx.request.body.status,
            description: ctx.request.body.description,
            updatedAt: updatedAt,
        });
        if (!task) throw new Error("Task not found");

        await task.updateOne(task);

        ctx.status = 200;
        ctx.body = "Task updated";
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}