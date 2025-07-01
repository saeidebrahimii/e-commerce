const bcrypt = require("bcrypt");
async function hashPassword(password) {
  const hash = bcrypt.hashSync(password, 13);
  return hash;
}
module.exports = { hashPassword };
