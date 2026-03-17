import express from "express"
import { Router } from "express"

const PostRouter = express.Router()


PostRouter.post("/create",(req,res)=>{
    console.log(req.body)

    console.log(req.cookies)
    res.send("post created succesfully")
})

export default PostRouter