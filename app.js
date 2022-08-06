var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
