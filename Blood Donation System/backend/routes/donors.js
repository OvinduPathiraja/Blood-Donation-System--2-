const router = require("express").Router();
let donor = require("../models/donor");

router.route("/add").post((req,res)=>{//add student
    const name = req.body.name;
    const telephone = parseInt(req.body.telephone);
    const NIC = req.body.NIC;
    const bloodtype = req.body.bloodtype;
    const password = req.body.password;
    const gender = req.body.gender;
    const dob =req.body.dob;
    const address = req.body.address;

    const newDonor = new donor({
        name,
        gender,
        bloodtype,
        telephone,
        NIC,
        password,
        dob,
        address
    })
    newDonor.save().then(()=>{
        res.json("Donor added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{//get Donor info
    donor.find().then((donors)=>{
        res.json(donors)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;