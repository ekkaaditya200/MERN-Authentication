import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../routes/user_route.js';
import authRoutes from '../routes/auth_route.js';
import cookieParser from 'cookie-parser';

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
app.use(express.json());
app.use(cookieParser());

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

//!Middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})

app.listen(PORT,()=>{
    console.log(`Listening to localhost ${PORT}`);
})
