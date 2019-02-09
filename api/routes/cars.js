const express = require("express");
const router = express.Router();

router.post("/fetchAll", (req, res) => {

    res.status(200).json("OK")
});

module.exports = router;
