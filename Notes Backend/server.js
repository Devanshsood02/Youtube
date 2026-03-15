import app from "./src/app.js";
 import connectDB from "./src/config/database.js";

 connectDB()

const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})