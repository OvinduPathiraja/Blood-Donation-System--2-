const router = require("express").Router();
let admin = require("../models/admin");

router.route("/add").post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const newadmin = new admin({
        username,
        password
    })
    newadmin.save().then(()=>{
        res.json("admin added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{//get admin info
    admin.find().then((admins)=>{
        res.json(admins)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;