const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ response: "test" });
});

app.listen(() => {
  console.log("mabduh");
});

module.exports = express;
