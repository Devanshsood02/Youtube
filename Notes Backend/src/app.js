import express from "express";
import noteModel from "./models/note.model.js";

const app = express();

app.use(express.json());

// const notes = [];

// app.post("/notes", (req, res) => {
//   notes.push(req.body);
//   console.log(notes)

//   res.status(201).json({
//     message: "note created succesfully",
//     notes,
//   });
// });

// app.get("/notes", (req, res) => {
// //   console.log(notes);
//   res.status(200).json({
//     message: "all notes fetched succesfully",
//     notes
//   });
// });

// app.delete("/notes/:index",(req,res)=>{

//     const {index}=req.params
//     delete notes[index]
//     res.status(200).json({
//         message:`${index} is deleted from notes array`,
//         notes
//     })
// })

// app.patch("/notes/:index",(req,res)=>{
//     const {index}=req.params
//     const{title,description} =req.body

//     notes[index].description=description

//     res.status(200).json({
//         message:`${index} description has been changed  with this ${description}`
//     })
// })

// now making it again to save it into the db

app.post("/notes", async (req, res) => {
  const data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(200).json({
    message: "note created successfully in db",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  console.log(notes);

  res.status(201).json({
    message: "notes fetched succesfully from db",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const deletedNote = await noteModel.findByIdAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "note deleted successfully",
    deletedNote,
  });
});

app.patch("/notes/:id", async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  const updatedNote = await noteModel.findByIdAndUpdate(id, {
    title: title,
    description: description,
  }, {new:true});

  res.status(200).json({
    message: "note is updated",
    updatedNote,
  });
});

export default app;
