import express from "express"
import authRouter from "./routes/auth.routes.js"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path"

const app= express()



app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());






app.get("/", (_req, res) => {
    res.status(200).json({ message: "Server is running" });
});

app.use("/api/auth", authRouter);


// -----------------Frontend build serving-----------------
// frontend build path
const frontendPath = path.join(path.resolve(), "dist");

// static serve
app.use(express.static(frontendPath));

// SPA fallback (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});

export default  app;
 