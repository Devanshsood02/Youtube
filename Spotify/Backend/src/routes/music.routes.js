import expres from "express";
import { Router } from "express";
import { createMusic } from "../controllers/music.controller.js";
import multer from "multer"

const upload=multer({
   storage: multer.memoryStorage()
})

export const router = expres.Router()



router.post("/upload",upload.single("music"),createMusic)