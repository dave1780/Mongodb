const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
});
const userList = mongoose.model('UserList', userSchema);

module.exports = userList;
