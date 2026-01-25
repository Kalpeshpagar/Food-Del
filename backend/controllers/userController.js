import { hash } from "bcrypt";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"; // For password hashing
import jwt from "jsonwebtoken"; // For token generation
import validator from "validator"; // For email validation

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({success:false, message:"User Doesn't exists"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({success:false, message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({ success: true, token });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

// create token
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({success:false, message: "User already exists" });
        }
        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success:false, message: "Invalid email format" });
        }
        if(password.length < 6){
            return res.status(400).json({ success:false, message: "Password must be at least 6 characters long" });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10); // salt means random data to make the hash more secure
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({ success:true, token});

    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false, message: "Error" });
    }
}

export {loginUser, registerUser};