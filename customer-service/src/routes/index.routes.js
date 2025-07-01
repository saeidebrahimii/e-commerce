const { Router } = require("express");
const customerController = require("../controllers/customer.controller");
const { addressRoutes } = require("./address.routes");

const router = Router();

router.get("/:id", customerController.getById);
router.post("/", customerController.create);
router.use("/address", addressRoutes);

module.exports = { indexRoutes: router };
