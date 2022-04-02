import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
    console.log(`running server at ${PORT}`)
})