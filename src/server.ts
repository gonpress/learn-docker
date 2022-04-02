import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig";
import userRouter from './api/routes/User'
import productRouter from './api/routes/Product'

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
    console.log(`running server at ${PORT}`)
})