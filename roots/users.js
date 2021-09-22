// USER ROUTE

const router = require("express").Router();

// Sign up
router.get("/", (req,res)=>{
    res.send("Hello New User")
})
module.exports = router;