import express from "express";
import cookieParser from "cookie-parser";
import {router as AuthRoutes} from "./routes/auth.routes.js"
import {router as MusicRoutes} from "./routes/music.routes.js"
const app = express();
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",AuthRoutes)
app.use("/api/music",MusicRoutes)

export default app;
