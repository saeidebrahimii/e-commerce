const { Address } = require("../models/address.model");
const { Customer } = require("../models/cutomer.model");

Customer.hasMany(Address, { foreignKey: "userId", sourceKey: "id" });
Address.belongsTo(Customer, { foreignKey: "userId", targetKey: "id" });