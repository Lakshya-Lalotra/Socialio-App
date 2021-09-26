const express = require("express");

const app = express();  // express application created
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
// const postman = require("postman");
const userRoute = require("./routes/users"); // Imported user.js
const authRoute = require("./routes/auth"); // Imported auth.js
const postRoute = require("./routes/posts");

dotenv.config();  // dotenv enabled

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);


//  middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
app.use("/api/users" ,userRoute); // user route call
app.use("/api/auth", authRoute); // auth route call
app.use("/api/posts", postRoute); // posts route call


// app.get("/", (req,res)=>
// {
//     res.send("Welcome to homepage")
// });
// app.get("/users", (req,res)=>
// {
//     res.send("Welcome User")
// });
app.listen(8800,()=>
{
    console.log("Backend Server is Running!!")
 });

//  const port = 3000;
// app.listen(port, () => console.log(`Example app listening on ${port}!`));