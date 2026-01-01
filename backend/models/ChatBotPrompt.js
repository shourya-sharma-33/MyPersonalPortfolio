const mongoose = require('mongoose');

const chatBotPromptSchema = new mongoose.Schema({
  sequence: {
    type: Number,
    required: true,
    unique: true
  },
  prompt: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('ChatBotPrompt', chatBotPromptSchema);
