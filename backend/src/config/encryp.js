const bcrypt = require("bcryptjs");
const { config } = require("dotenv");
config();

module.exports = {
  // Fungsi untuk hashing password
  password_hash: (string) => {
    const salt = bcrypt.genSaltSync(parseInt(process.env.ENCRYP_LENGTH || 10));
    const hash = bcrypt.hashSync(string, salt);
    return hash;
  },

  // Fungsi untuk memverifikasi password yang diinput dengan hash di database
  password_verify: (string, hash) => {
    return bcrypt.compareSync(string, hash);
  },
};
