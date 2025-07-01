const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
  }
);
sequelize
  .authenticate({ logging: false })
  .then(() => {
    console.log("🟢 Successfully connected to database");
  })
  .catch((error) => {
    console.log("❌ DB ERROR : ", error);
  });

sequelize.sync({ alter: true, logging: false });

module.exports = { sequelize };
