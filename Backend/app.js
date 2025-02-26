const dotenv = require("dotenv");
dotenv.config();

//express ko require karna
const express = require("express");
const app = express();

//for now all domain are allowed jab domain milega
//tab sirf usko allow karenge
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//cookiesparser
const cookiesParser=require('cookie-parser');
app.use(cookiesParser());

//database se connect karenge
const connectToDb = require("./db/db");
connectToDb();

//res.send header and sab set karta hai and automatic end karta hai
// res.send aise nahi karta raw data send karta hai bas
app.get("/", (req, res) => {
  res.send("namste world");
});

const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);

module.exports = app;
