const express = require("express");
require("@dotenvx/dotenvx").config();
const { indexRoutes } = require("./routes/index.routes");
const morgan = require("morgan");
const app = express();
require("./config/sequelize.config");
require("./config/associations.db.config");

app.use(express.json());
app.use(morgan("dev"));
app.use(indexRoutes);
app.use((req, res) => {
  res.status(404).json({ msg: "route not found", statusCode: 404 });
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    msg: err.message || "Internal Server Error",
    statusCode,
  });
});

app.listen(process.env.PORT || 8001, () => {
  console.log(`🟢 Customer server run on port ${process.env.PORT || 8001}`);
});
