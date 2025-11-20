import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "task title is required"],
        trim: true
    },
    completed: {
        type: String,
        default: false,
    },
},
{timestamps: true}
)

const Task = mongoose.model("Task", taskSchema)
export default Task