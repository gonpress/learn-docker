import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig";

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
    console.log(`running server at ${PORT}`)
})