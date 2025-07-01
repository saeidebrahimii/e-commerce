const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(morgan("dev"));
app.use(
  "/customer",
  createProxyMiddleware({
    target: process.env.CUSTOMER_SERVICE_URL,
  })
);

app.use((req, res, next) => {
  res.status(404).json({ msg: "route not found", statusCode: 404 });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`🟢 Application run on port ${process.env.PORT || 8000}`);
});
