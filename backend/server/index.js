const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use("/images", express.static(path.join(__dirname, "../public/images")));

const Api_data = require("../Api/Api");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send(Api_data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
