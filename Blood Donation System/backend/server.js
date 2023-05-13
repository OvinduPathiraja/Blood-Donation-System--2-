const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success ");
})

const donorRouter = require("./routes/donors.js");
app.use("/Donor",donorRouter);

const bloodBankRouter = require("./routes/bloodBanks.js");
app.use("/bloodBank",bloodBankRouter);

const hospitalRouter = require("./routes/hospitals.js");
app.use("/hospital",hospitalRouter);

const adminRouter = require("./routes/admins.js");
app.use("/admin",adminRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


