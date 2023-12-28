import User from '../models/user_model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utls/error.js';
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        // res.status(400).send(error);
        // next(errorHandler(300,"Some went wrong")) //custom error
        next(error)
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(401, "Invalid Credentials"));
        const isValidPass = await bcryptjs.compare(password, validUser.password);
        if (!isValidPass) return next(errorHandler(401, 'Invalid Credentials'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000);
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(201).json(rest);
    } catch (error) {
        next(error)
    }
}