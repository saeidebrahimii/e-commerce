const autoBind = require("auto-bind");
const CustomerService = require("../services/customer.service");
const { hashPassword } = require("../utils/password.util");

class CustomerController {
  #service;
  constructor() {
    this.#service = new CustomerService();
    autoBind(this);
  }
  async create(req, res) {
    try {
      const { firstName, lastName, email, password, mobile = null } = req.body;
      const hash = await hashPassword(password);
      const user = await this.#service.create(
        firstName,
        lastName,
        mobile,
        email,
        hash
      );
      res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Error create User.", statusCode: 500 });
    }
  }
  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await this.#service.getById(id);
      if (user) {
        const plainUser = user.toJSON();
        delete plainUser?.password;
        delete plainUser?.createdAt;
        delete plainUser?.updatedAt;
        res.json({ data: plainUser });
      }
      res.json({ data: null });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Error create User.", statusCode: 500 });
    }
  }
}
module.exports = new CustomerController();
