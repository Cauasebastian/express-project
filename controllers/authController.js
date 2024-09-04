const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//@desc Register a new user
//@route POST /api/auth/register
//@access Public
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({
        email
    });
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    console.log(user);
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
   if (!email || !password) {
       res.status(400);
       throw new Error('Please provide email and password');
   }
   const user = await User.findOne({ email });
   //compare password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: jwt.sign({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            })
        })}
    else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})
const currentUserInfo = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { register, login , currentUserInfo };