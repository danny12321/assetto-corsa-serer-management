const express = require("express");
const router = express.Router();

const cars = require('./cars');
const settings = require('./settings');
const track = require('./track');

router.post("", (req, res) => {
    console.log("BOI")
    res.send("BOI")
});

router.use('/cars', cars);
router.use('/settings', settings);
router.use('/track', track);


module.exports = router;
