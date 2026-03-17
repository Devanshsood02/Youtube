import express from "express";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import userModel from "../models/user.model.js";
const PostRouter = express.Router();

PostRouter.post("/create", async(req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }

  try {
    
      const decoded = jwt.verify(token, config.JWT_SECRET);
      const user=await userModel.findOne({
        _id:decoded.id


      })
      console.log(user)


  } catch (error) {
    return res.status(401).json({
        message:"Invalid token"
    })
  }



  res.send("post created succesfully");
});

export default PostRouter;
