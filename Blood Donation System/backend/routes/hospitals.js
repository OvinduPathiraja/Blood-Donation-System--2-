const router = require("express").Router();
let hospital = require("../models/hospital");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const telephone = parseInt(req.body.telephone);
    const username = req.body.username;
    const district = req.body.district;
    const password = req.body.password;
    const address = req.body.address;

    const newhospital = new hospital({
        name,
        district,
        telephone,
        username,
        password,
        address
    })
    newhospital.save().then(()=>{
        res.json("hospital added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{//get hospital info
    hospital.find().then((hospitals)=>{
        res.json(hospitals)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;