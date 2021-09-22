// Auth Route

const router = require("express").Router();
const User = require("../models/User");
router.get("/register", async (req,res)=>{
    res.send("Auth Route")
//     const user = await new User({
//         username:"Lakshya",
//         email:"lakshyalalotra@gmail.com",
//         password:"abcdABCD1234!@#$"
//     })

//   await user.save();
//     res.send("ok")
});
module.exports = router;