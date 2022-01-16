import express from "express";
import { data, products } from "./data.js";

const app = express();

app.use(express.static("public"));

app.get("/api/products/:id", (req, res) => {
  // console.log(req.params.id);
  const keys = Object.keys(products);
  const productKey = Object.keys(products).find((key) => key === req.params.id);
  const product = products[productKey];
  // console.log(products[product]);
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
