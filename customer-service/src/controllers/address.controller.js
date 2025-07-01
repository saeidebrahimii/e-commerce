const autoBind = require("auto-bind");
const AddressService = require("../services/address.service");
const CustomerService = require("../services/customer.service");

class AddressController {
  #service;
  #customerService;
  constructor() {
    this.#service = new AddressService();
    this.#customerService = new CustomerService();
    autoBind(this);
  }
  async create(req, res) {
    try {
      const { province, city, postalCode, body } = req.body;
      const { userId } = req.params;
      const user = await this.#customerService.getById(userId);
      if (!user) {
        res.status(404).json({ msg: "user not found", statusCode: 404 });
      }
      const address = await this.#service.create(
        userId,
        province,
        city,
        postalCode,
        body
      );
      return res
        .status(201)
        .json({
          msg: "Address created successfully.",
          data: address,
          statusCode: 201,
        });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Error create Address.", statusCode: 500 });
    }
  }
}
module.exports = new AddressController();
