const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 64,
  },
  stripe_customer_id: String,
  subscriptions: []
  
});

const User = mongoose.model("User", userSchema);
module.exports = User;
