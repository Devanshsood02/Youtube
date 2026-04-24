import { Router } from "express";
import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

export const router = express.Router()

router.post("/register",registerUser)

router.post("/login",loginUser)