const { Router } = require("express");
const addressController = require("../controllers/address.controller");

const router = Router();

router.post("/:userId", addressController.create);

module.exports = { addressRoutes: router };
