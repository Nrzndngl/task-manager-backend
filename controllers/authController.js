import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '7d'});

export const register = async (req,res) =>{
    const {name,email,password}= req.body;
    const user = await User.create({name,email,password});
    res.json({token: generateToken(user._id)});
};

export const login = async (req,res) =>{
    const {email,password} =req.body;
    const user = await User.findOne({email});
    if (!user || !(await user.matchPassword(password))){
        return res.status(401).json ({message: 'Invalid Credentials'});
    }
    res.json({token: generateToken(user._id)});
};