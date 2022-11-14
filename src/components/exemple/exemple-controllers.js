import Exemple from "#components/exemple/exemple-model.js"
import Joi from "joi"

export async function index(ctx) {

    try {
        ctx.body = await Exemple.find({})
    }
    catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function create(ctx) {

    try {
        const exempleValidattionSchema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string(),
            price: Joi.number().required(),
            colors: Joi.array().has(Joi.string().optional()).optional()
        })
        const { error } = exempleValidattionSchema.validate(ctx.request.body)
        if (error) {
            throw new Error(error)
        }
        ctx.body = "hello"
    }
    catch (e) {
        ctx.badRequest({ message: e.message })
    }
}