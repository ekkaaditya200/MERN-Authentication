import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '../routes/user_route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connect Successful");
    })
    .catch((error) => {
        console.log("Error", error);
    })

const PORT = 4000;
const app = express();

app.use('/api/user',userRouter);

app.listen(PORT,()=>{
    console.log(`Listening to localhost ${PORT}`);
})
