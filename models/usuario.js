const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario", {
  userName: String,
  password: String,
});

module.exports = Usuario;
