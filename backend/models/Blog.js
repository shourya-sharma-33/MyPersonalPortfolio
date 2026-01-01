const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
