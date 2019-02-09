const app = require("express")();
const port = 5000;
const routes = require("./routes");

app.use("/api/", routes);

app.listen(port, err => {
  if (err) throw err;
  console.log("server is listening on port: " + port);
});
