const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  sequence: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
