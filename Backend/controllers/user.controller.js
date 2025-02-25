const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
    // Fixing validationResult typo
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;

        // Hash the password using the model function
        const hashPassword = await userModel.hashPassword(password);

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
