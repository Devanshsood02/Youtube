import musicModel from "../models/music.models.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import uploadFile from "../services/storage.service.js";

 export async function createMusic(req, res) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unathourized ",
    });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You  don't have acess to create an music",
      });
    }
  

  const {title}=req.body
  const file=req.file

  const result = await uploadFile(file.buffer.toString("base64"))

  const music= await musicModel.create({
    uri:result.url ,
    title,
    artist:decoded.id,

  })

  res.status(201).json({
    message:"Music created successfully",
    music:{
        id:music._id,
        uri:music.uri,
        title:music.title,
        artist:music.artist
    }
  })
  } catch (err) {
    console.log(err)
    return res.status(401).json({
      message: "unathourized",
    });
  }

}
