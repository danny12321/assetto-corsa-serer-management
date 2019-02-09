const express = require("express");
const router = express.Router();

const fs = require("fs");
const ini = require("ini");

router.post("/fetchAll", (req, res) => {
  let tracks = [];

  // Get all tracks
  fs.readdirSync("../../../content/tracks").forEach(name => {
    if (fs.lstatSync(`../../../content/tracks/${name}/ui`).isDirectory()) {
      const files = fs.readdirSync(`../../../content/tracks/${name}/ui`);

      if (
        fs
          .lstatSync(`../../../content/tracks/${name}/ui/${files[0]}`)
          .isDirectory()
      ) {
        // Track has multiple layouts
        files.forEach(file => {
          tracks.push({
            name: `${name} - ${file}`,
            path: `${name}/ui/${file}`
          });
        });
      } else {
        // Track has 1 layout
        tracks.push({ name, path: `${name}/ui` });
      }
    }
  });

  res.status(200).json(tracks);
});

router.get("/preview", (req, res) => {
  if (fs.existsSync(`../../../content/tracks/${req.query.path}/preview.png`)) {
    var img = fs.readFileSync(
      `../../../content/tracks/${req.query.path}/preview.png`
    );
    res.writeHead(200, { "Content-Type": "image/gif" });
    res.end(img, "binary");
  } else {
    res.status(404).json("Not Found");
  }
});

router.get("/map", (req, res) => {
  if (fs.existsSync(`../../../content/tracks/${req.query.path}/outline.png`)) {
    var img = fs.readFileSync(
      `../../../content/tracks/${req.query.path}/outline.png`
    );
    res.writeHead(200, { "Content-Type": "image/gif" });
    res.end(img, "binary");
  } else {
    res.status(404).json("Not Found");
  }
});

module.exports = router;
