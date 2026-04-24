import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";


const authRouter= Router()

// full api path--> /api/auth/register

authRouter.post("/register",authController.register)


authRouter.get("/getme",authController.getMe)

export default authRouter 