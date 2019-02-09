const express = require("express");
const router = express.Router();

const fs = require('fs');
const ini = require('ini');

router.post("/fetchAll", (req, res) => {
    var config = ini.parse(fs.readFileSync('../../cfg/server_cfg.ini', 'utf-8'))
    res.status(200).json(config)
});

module.exports = router;
