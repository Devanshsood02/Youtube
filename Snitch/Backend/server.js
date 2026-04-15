import app from "./src/app.js";
import { connectToDB } from "./src/config/database.js";



const startServer = async () => {
    try {
        app.listen(3000, () => {
            console.log(`Server listening on port 3000`);
    
            });
    await connectToDB()

    
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();