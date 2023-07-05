import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { postTask,putTask,deleteTask,getTask,getTasks } from "../controllers/task.controller.js";

const tasksRoutes=Router()

tasksRoutes.post('/tasks',authRequired,postTask)
tasksRoutes.put('/tasks/:id',authRequired,putTask)
tasksRoutes.delete('/tasks/:id',authRequired,deleteTask)
tasksRoutes.get('/tasks',authRequired,getTasks)
tasksRoutes.get('/tasks/:id',authRequired,getTask)
export default tasksRoutes