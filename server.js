const express = require("express");
const app = express();
const port = 8888;
const cart = require("./cart-items");

app.use(express.json());
app.use("/cart-items", cart);

app.listen(port, () => console.log(`listening on port: ${port}`));