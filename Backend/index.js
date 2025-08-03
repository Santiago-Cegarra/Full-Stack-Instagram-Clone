import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"
import messageRoute from "./routes/message.route.js"


console.log("hola mundo");

dotenv.config({})
const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) =>{
    return res.status(200).json({
        message:"Im coming from Backend",
        success:true
    })
})

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOptions));

app.use("/api/v2/user", userRoute);
app.use("/api/v2/post", postRoute);
app.use("/api/v2/message", messageRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server Listen at Port: ${PORT}`)
})
