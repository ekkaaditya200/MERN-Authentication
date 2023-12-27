import User from '../models/user_model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utls/error.js';
export const signup = async (req,res,next) => {
    const {username,email,password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).json({message:"User created successfully"});
    }catch(error)
    {
        // res.status(400).send(error);
        // next(errorHandler(300,"Some went wrong")) //custom error
        next(error)
    }
};