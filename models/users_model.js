const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  hash: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
