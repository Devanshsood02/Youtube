import express from "express";
import postModel from "./models/post.model.js";
import multer from "multer";
import cors from "cors"

import uploadFile from "./services/storage.service.js";

const app = express();
app.use(express.json());
// app.use(multer("dev"))

app.use(cors())

const upload = multer({ storage: multer.memoryStorage() });

// creation api

app.post("/create-post", upload.single("image"), async (req, res) => {
  //   const data = req.body;

  //   await postModel.create(data);

  //   res.status(200).json({
  //     message: "post created succesfuly",
  //   });

  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  // console.log(result)

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "post created succesfully",
    post,
  });
});


// fetching api

app.get("/feed",async(req,res)=>{

   

   const posts= await postModel.find()

    return res.status(200).json({
        message:"all posts fetched successfully",
        posts
    })


})


export default app;
