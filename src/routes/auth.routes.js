import { Router } from "express";
import { login,register,logout,profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
const authToutes= Router()

authToutes.post("/register",register)

authToutes.post("/login",await login)

authToutes.post("/logout",logout)

authToutes.get('/profile',authRequired,profile)

export default authToutes