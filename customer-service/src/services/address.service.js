const autoBind = require("auto-bind");
const { Address } = require("../models/address.model");

class AddressService {
  constructor() {
    autoBind(this);
  }
  async create(userId, province, city, postalCode, body) {
    const address = await Address.create({
      userId,
      province,
      city,
      postalCode,
      body,
    });
    return address;
  }
}

module.exports = AddressService;
