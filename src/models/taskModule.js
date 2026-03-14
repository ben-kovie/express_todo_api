import mongoose from "mongoose"

const taskDB = mongoose.connection.useDb("taskDB")
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "task title is required"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
{timestamps: true}
)


export const Task = taskDB.model("Task", taskSchema)