const express = require('express');
const router = express.Router();
const {User,Gobble} = require('../../models');

router.get("/",(req,res)=>{
    Gobble.findAll({
        include:[User]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.user){
        return res.status(403).json({msg:"login first to gobble you fake turkey!"})
    }
    Gobble.create({
        UserId:req.session.user.id,
        content:req.body.content,
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})



module.exports = router;