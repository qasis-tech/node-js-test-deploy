var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on port 4000");
});
