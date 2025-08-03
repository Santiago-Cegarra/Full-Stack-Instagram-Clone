import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js"

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
    origin: "htpp://localhost:5173",
    credentials: true
}

app.use(cors(corsOptions));

app.use("/api/v2/user", userRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server Listen at Port: ${PORT}`)
})
