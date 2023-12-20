import express from 'express';
import cors from "cors"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRoutes from './routes/productRoutes.js';

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static("uploads"))

const PORT = process.env.PORT
const URL = process.env.CONNECTION_URL.replace(
    "<password>",
    process.env.PASSWORD
);
app.use('/products', productRoutes);

mongoose.connect(URL).catch((err) => console.log("Db not connect" + err));


app.listen(PORT, () => {
  console.log(`Server Connection ${PORT}`);
});