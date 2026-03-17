import express from "express"
import { registerUser } from "../controller/auth.controller.js"

const AuthRouter=express.Router()


AuthRouter.post("/register",registerUser)

export default AuthRouter