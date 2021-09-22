// USER ROUTE


const router = require("express").Router();
router.get("/", (req,res)=>{
    res.send("Hello New User")
});
module.exports = router;