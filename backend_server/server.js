import express from "express";
import data from "./data.js";

const app = express();

app.use(express.static("public"));

app.get("/api/categories", (req, res) => {
  res.send(data.categories);
});

app.get("/api/headphones", (req, res) => {
  res.send(data.headphones);
});

app.get("/all", (req, res) => {
  res.send(data);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
