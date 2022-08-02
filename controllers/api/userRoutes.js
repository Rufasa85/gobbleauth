const express = require('express');
const router = express.Router();
const {User,Gobble} = require('../../models');

router.get("/",(req,res)=>{
    User.findAll({
        include:[Gobble]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/",(req,res)=>{
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

module.exports = router;