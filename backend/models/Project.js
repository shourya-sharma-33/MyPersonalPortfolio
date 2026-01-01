const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  cat: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  big: {
    type: Boolean,
    default: false
  },
  link: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
