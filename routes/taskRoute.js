import express from "express"
import {getTasks,
        getTaskById, 
        addTask,
        updateTask,
        deleteTask,
} from "../controllers/taskController.js"

const router = express.Router()

router.get('/', getTasks)
router.get('/:id', getTaskById)
router.post('/addTask', addTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router
