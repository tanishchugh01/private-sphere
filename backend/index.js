import express from "express";
import cors from "cors";
import "dotenv/config";
import configureRoutes from "./routes/routes-config.js  ";
const app = express();

app.use(
  cors({
    origin: process.env.NODE_APP_BACKEND_URL,
  })
);

// app.use(process.env.NODE_APP_BASE_URL, () => configureRoutes(app));
configureRoutes(app)

app.listen(8080, () => {
  console.log("listening bro");
});

// app.get("/url/test1", (req, res) => {
//   const vari = req.query.abc;
//   console.log(vari);
//   res.status(200).send(`you are ${vari}`);
// });

// app.get("/", (req, res) => {
//   console.log(req.url);
//   res.send("Message");
// });
