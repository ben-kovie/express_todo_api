import {Task} from "../models/taskModule.js";
import asyncWrapper from "../middlewares/asyncWrapper.js";
import CustomError from "../errors/customeError.js";


// GET all tasks
export const getAllTasks = asyncWrapper(async (req, res) => {
      const userId = {user: req.user._id}
    const tasks = await Task.find(userId);
    res.status(200).json({
        success: true,
        data: tasks
    });
});

// CREATE a task
export const createTask = asyncWrapper(async (req, res) => {
    const {title, description}= req.body
    const task = await Task.create({title, description, user: req.user._id});
    res.status(201).json({
        success: true,
        data: task
    });
});

// GET single task
export const getTask = asyncWrapper(async (req, res, next) => {
    const taskId = req.params.id;
    const singleTaskFilter = {_id: taskId, user: req.user._id}
    const task = await Task.findOne(singleTaskFilter);

    if (!task) {
        return next(new CustomError("Task not found", 404));
    }

    res.status(200).json({
        success: true,
        data: task
    });
});

// UPDATE task
export const updateTask = asyncWrapper(async (req, res, next) => {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({_id: taskId, user: req.user._id}, req.body, {
        new: true,
        runValidators: true
    });

    if (!task) {
        return next(new CustomError("Task not found", 404));
    }

    res.status(200).json({
        success: true,
        data: task
    });
});

// DELETE task
export const deleteTask = asyncWrapper(async (req, res, next) => {
    const taskId = req.params.id;
      const deleteFileter = {_id: taskId,user: req.user._id}

    const task = await Task.findOneAndDelete(deleteFileter);

    if (!task) {
        return next(new CustomError("Task not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "Task deleted successfully"
    });
});
