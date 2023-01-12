const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(8080, () => {
  console.log("listening bro");
});

app.get("/test", (req, res) => {
  const vari = req.query.abc;
  console.log(vari);
  res.status(201).send(`you are ${vari}`);
});

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Message");
});
