// Auth Route

const router = require("express").Router();
router.get("/", (req,res)=>{
    res.send("Auth Route")
});
module.exports = router;