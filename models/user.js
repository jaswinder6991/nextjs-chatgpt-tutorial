const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  issuer: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  weightLossGoals: {
    type: String,
    //required: true,
  },
  // Other additional fields as needed
});

module.exports = mongoose.model('User', userSchema);
