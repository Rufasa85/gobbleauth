const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes")
const gobbleRoutes = require("./gobbleRoutes")


router.get('/',(req,res)=>{
    res.send('Hello from apis!');
})

router.use("/users",userRoutes)
router.use("/gobbles",gobbleRoutes)

module.exports = router;