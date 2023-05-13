const router = require("express").Router();
let BloodBank = require("../models/bloodBank");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const telephone = parseInt(req.body.telephone);
    const username = req.body.username;
    const district = req.body.district;
    const password = req.body.password;
    const address = req.body.address;

    const newBloodBank = new BloodBank({
        name,
        district,
        telephone,
        username,
        password,
        address
    })
    newBloodBank.save().then(()=>{
        res.json("BloodBank added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{//get BloodBank info
    BloodBank.find().then((BloodBanks)=>{
        res.json(BloodBanks)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;