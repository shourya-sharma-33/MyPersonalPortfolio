const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog');
const Client = require('../models/Client');
const Progress = require('../models/Progress');
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');
const WhatDoing = require('../models/WhatDoing');
const ChatBotPrompt = require('../models/ChatBotPrompt');

// Get all data
router.get('/blogs', async (req, res) => {
  try {
    const data = await Blog.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/clients', async (req, res) => {
  try {
    const data = await Client.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/progress', async (req, res) => {
  try {
    const data = await Progress.find().sort({ sequence: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/projects', async (req, res) => {
  try {
    const data = await Project.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/testimonials', async (req, res) => {
  try {
    const data = await Testimonial.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/whatdoing', async (req, res) => {
  try {
    const data = await WhatDoing.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/chatbotprompts', async (req, res) => {
  try {
    const data = await ChatBotPrompt.find().sort({ sequence: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
