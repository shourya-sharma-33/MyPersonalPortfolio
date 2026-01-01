const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  }
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
