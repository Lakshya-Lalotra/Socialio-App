const express = require("express");

const app = express();  // express application created
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();  // dotenv enabled
app.listen(8800,()=>
{
    console.log("Backend Server is Running!!")
});