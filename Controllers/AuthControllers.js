const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const AuthModel = require('../models/AuthModel')



const HandleUserSignUp = async (req, res)=>{
    try {
        const { email, password, userName} = req.body

        // Check if user already exists
        const existingUser = await AuthModel.findOne({ email });

        if(existingUser) {
            return res.status(400).json({message: 'User already exists'})
        }

        // hash the password

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new AuthModel({
            email,
            password: hashedPassword,
            userName
        });


        await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            user: {
                email: newUser?.email,
                userName: newUser?.userName,
                role: newUser?.role,
                id: newUser?._id

            }
        })





    } catch (error) {
        res.status(500).json({ message: error.message });    
    }
}

const HandleUserLogin = async (req, res)=> {
    try {

        const { email, password } = req.body;
        // Check if user exists

        const existingUser = await AuthModel.findOne({ email});
 
        if(!existingUser) {
            return res.status(404).json({ message: 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if(!isMatch) {
            return res.status(400).json({message: 'Incorrect email or password'})
        }

        // Generate JWT token
        const token = jwt.sign(
            {existingUser},
            process.env.ACCESS_TOKEN,
            { expiresIn: '1h'} // Token expires in 1 hour
        )

        const refreshToken = jwt.sign(
            {existingUser},
            process.env.REFRESH_TOKEN,
            { expiresIn: '7d'} // Refresh token expires in 7 days
        )

        res.status(200).json({
            message: 'Login successful',
            token,
            refreshToken,
            user: {
                email: existingUser.email,
                userName: existingUser.userName,
                role: existingUser.role,
                id: existingUser._id
            }
        })


    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}

module.exports = {
    HandleUserSignUp,
    HandleUserLogin
}