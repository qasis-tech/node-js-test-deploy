const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");

app.get("/", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

const PORT = process.env.PORT || 4000;

const httpsOptions = {
  cert: fs.readFileSync("./certs/fullchain1.pem"),
  key: fs.readFileSync("./certs/privkey1.pem"),
};

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log("Server running on port 4000");
// });
