const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require("express-validator");
const BlacklistTokenModel=require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    // Fixing validationResult typo
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

   

    try {
        const { name, email, password } = req.body;
        const isUserAlreadyExist = await userModel.findOne({ email });

        if (isUserAlreadyExist) {
            return res.status(400).json({ message: 'User already exist' });
        }

        // Hash the password using the model function
        const hashPassword = await userModel.hashPassword(password);
        // const hashPassword = await bcrypt.hash(password, 10);


        // Create a new user in the database
        const user = await userService.createUser({
            name,
            email,
            password: hashPassword
        });

        // Generate auth token (ensure this function is async if needed)
        const token = await user.generateAuthToken();

        res.status(201).json({ token, user });
    } catch (error) {
        console.error("Error in registerUser:", error);
        res.status(500).json({ message: "Server error", error });
    }
};


module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, user });
}


module.exports.getUserProfile = async (req, res, next) => {

    res.status(200).json(req.user);

}


module.exports.logoutUser = async (req,res,next)=>{
    res.clearCookie('token')
    const token=req.cookies.token || req.headers.authorization?.split('')[1]
    await BlacklistTokenModel.create({token})
    res.status(200).json({message:'Logged Out'})
}