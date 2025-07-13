const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    name: "Kofta",
    price: "450",
  },
  {
    name: "Kulfi",
    price: "45",
  },
  {
    name: "Kaju katli",
    price: "4500",
  },
  {
    name: "Rasmalai",
    price: "450",
  },
  {
    name: "Kofta",
    price: "450",
  },
];
app.get("/", (req, res) => {
  res.send(data);
});
app.get("/hello", (req, res) => {
  res.send("Hello Rahul!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
