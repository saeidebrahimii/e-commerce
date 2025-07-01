const autoBind = require("auto-bind");
const { Customer } = require("../models/cutomer.model");

class CustomerService {
  constructor() {
    autoBind(this);
  }
  async create(
    firstName,
    lastName,
    mobile = null,
    email,
    password,
    avatar = null
  ) {
    const user = await Customer.create({
      firstName,
      lastName,
      mobile,
      password,
      email,
      avatar,
    });
    return user;
  }
  async getById(id) {
    const user = await Customer.findByPk(id);
    return user;
  }
  async getAll() {
    const users = await Customer.findAll();
    return users;
  }
  async deleteById(id) {
    const deletedUser = await Customer.destroy({ id });
    return deletedUser;
  }
}
module.exports = CustomerService;
