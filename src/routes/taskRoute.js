import express from "express"
import {getTask,
        getAllTasks, 
        createTask,
        updateTask,
        deleteTask,
} from "../controllers/taskController.js"
import auth from "../middlewares/authMiddleWare.js";

const router = express.Router()

router.use(auth); // all task routes protected


router.get('/', getAllTasks)
router.get('/:id', getTask)
router.post('/addTask', createTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router
