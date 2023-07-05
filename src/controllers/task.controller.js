import Task from "../models/task.model.js"
import User from "../models/user.model.js"

export const getTask= async (req,res)=>{
    try{
        const tasks= await Task.findById(req.params.id)
        res.status(200).json(tasks)
    }catch(err){
        console.log(err)
    }
}
export const getTasks=async (req,res)=>{
    try{
        const tasks= await Task.find({user:req.user.id})
        res.status(200).json(tasks)
    }catch(err){
        console.log(err)
    }
}
export const putTask= async (req,res)=>{
    try{
        const taskId = req.params.id;
        const {title, description}=req.body
        const task= await Task.findByIdAndUpdate(taskId,{title:title,description:description},{new:true})
        res.status(200).json({message:"modificada",task})
    }catch(err){
        console.log(err)
    }
}
export const deleteTask= async (req,res)=>{
    try{
        const taskId = req.params.id;
        await Task.findByIdAndDelete(taskId)
        res.status(200).json({message:"eliminada"})
    }catch(err){
        console.log(err)
    }
}
export const postTask=async (req,res)=>{
    const{title,description}=req.body
    try{
        const newTask=new Task({
            title:title,
            desciption:description,
            user: req.user.id
        })
        await newTask.save()
        res.status(200).json({
            message:'La tarea ' + title +' ha sido guardada con exito'
        })
        
    }catch(err){
        console.log(err)
    }
}

