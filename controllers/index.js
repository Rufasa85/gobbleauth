const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")

router.get('/',(req,res)=>{
    res.render("home")
})
router.get("/secretclub",(req,res)=>{
    if(!req.session.user){
        return res.status(403).json({msg:"knucklhead, you have to login to enter the secret club!"})
    }
    res.render("club",req.session.user)
})

router.get("/readsession",(req,res)=>{
    res.json(req.session)
})

router.get("/addcounter",(req,res)=>{
    if(req.session.counter){
        req.session.counter++
    } else {
        req.session.counter=1
    }
    res.send("req.session updated")
})

router.use("/api",apiRoutes)

module.exports = router;