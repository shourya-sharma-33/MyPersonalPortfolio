const mongoose = require('mongoose');

// Note: Using schema matching frontend structure (img, title, text) 
// instead of user-provided schema which seemed to be a copy of Testimonials.
const whatDoingSchema = new mongoose.Schema({
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
  }
}, { timestamps: true });

module.exports = mongoose.model('WhatDoing', whatDoingSchema);
