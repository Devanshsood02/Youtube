import express from "express";
import AuthRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import PostRouter from "./routes/post.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRouter);
app.use("/api/posts", PostRouter);

export default app;
