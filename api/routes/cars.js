const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/fetchAll", (req, res) => {
  let cars = [];

  // Get all tracks
  fs.readdirSync("../../../content/cars").forEach(name => {
    let car = { name, skins: [] };

    if (
      fs.lstatSync(`../../../content/cars/${name}`).isDirectory() &&
      fs.existsSync(`../../../content/cars/${name}/skins`)
    ) {
      fs.readdirSync(`../../../content/cars/${name}/skins`).forEach(skin => {
        car.skins.push(skin);
      });
    }

    cars.push(car);
  });

  res.status(200).json(cars);
});

router.get("/preview", (req, res) => {
  if (fs.existsSync(`../../../content/cars/${req.query.car}/skins/${req.query.skin}/preview.jpg`)) {
    var img = fs.readFileSync(
      `../../../content/cars/${req.query.car}/skins/${req.query.skin}/preview.jpg`
    );
    res.writeHead(200, { "Content-Type": "image/gif" });
    res.end(img, "binary");
  } else {
    res.status(404).json("Not Found");
  }
});

module.exports = router;
