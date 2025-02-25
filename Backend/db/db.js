const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("Connected to DATABASE successfully");
    } catch (err) {
        console.log("DB Connection Error:", err);
    }
}

module.exports = connectToDb;
