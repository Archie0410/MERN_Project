const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['customer', 'artist'], default: 'customer' },
});

module.exports = mongoose.model('User', UserSchema);