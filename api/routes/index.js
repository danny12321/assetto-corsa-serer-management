const express = require("express");
const router = express.Router();

const cars = require('./cars');

router.post("", (req, res) => {
    console.log("BOI")
    res.send("BOI")
});

router.use('/cars', cars);


module.exports = router;
