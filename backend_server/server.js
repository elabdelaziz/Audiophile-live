import express from "express";
import { data, products } from "./data.js";
import path from "path";
const app = express();

const __dirname = path.resolve();

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/app/build")));
// app.get("*", function (req, res) {
//   const index = path.join(__dirname, "build", "index.html");
//   res.sendFile(index);
// });
app.get("/api/products/:id", (req, res) => {
  const keys = Object.keys(products);
  const productKey = Object.keys(products).find((key) => key === req.params.id);
  const product = products[productKey];
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

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
