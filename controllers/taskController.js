import Task from "../models/taskModule.js"

//controller to get all tasks
export const getTasks = async (req, res, next)=>{
   try{
    const tasks = await Task.find()
    res.status(200)
    .json({
        tasks
    }
    )
   }catch(err){
    next(err)
   }
}

//controller to get a single task
export const getTaskById = async (req, res, next)=>{
    try{
        const task = await Task.findById(req.params.id)
        if(!task){
            return res.status(404)
            .json({
                message: "task not found"
            })
        }
        res.status(200)
        .json({
            task
        })
    }catch(err)
    {
        next(err)
    }
}


//controller to add task
export const addTask = async (req, res, next)=>{

    try{
       const task = await Task.create(req.body)
       res.status(201)
       .json({
        message: "sucessful",
        task
       })
    }catch(err)
    {
        next(err)
    }
}


//controller to update task
export const updateTask = async (req, res, next)=>{
    try{
      const task = await Task.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new: true}
      )

      if(!task){
        return res.status(404)
        .json({
            message: "Task not found",
        })
      }

      res.status(201)
      .json({
        message: "Task Updated",
        task
      })

    }catch(err){
        next(err)
    }
}


// controller to delete Task
export const deleteTask = async (req, res, next)=>{

    try{
    const task = await Task.findByIdAndDelete(
        req.params.id
    )
    if(!task){
        return res.status(404)
        .json({
            message: "Task not found"
        })
    }

    res.status(200)
    .json({
        message: "Task deleted sucessfully"
    })
    
    }catch(err){
        next(err)
    }
}