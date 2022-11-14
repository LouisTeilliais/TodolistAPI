import mongoose from "mongoose";

const { Schema } = mongoose

const taskSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    description: {
        type: String
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    }
})

const Task = mongoose.model('Task', taskSchema)

export default Task;

