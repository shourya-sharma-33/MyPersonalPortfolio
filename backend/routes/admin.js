const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');

const Blog = require('../models/Blog');
const Client = require('../models/Client');
const Progress = require('../models/Progress');
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');
const WhatDoing = require('../models/WhatDoing');
const ChatBotPrompt = require('../models/ChatBotPrompt');

// Helper function to handle image upload
const handleImageUpload = (req) => {
  if (req.file) {
    return req.file.path; // Cloudinary returns the URL in path
  }
  return req.body.img || req.body.avatar; // Fallback to provided URL string
};

// --- Blogs ---
router.post('/blogs', upload.single('img'), async (req, res) => {
  try {
    const blogData = {
      ...req.body,
      img: handleImageUpload(req)
    };
    const newBlog = new Blog(blogData);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- Clients ---
router.post('/clients', upload.single('img'), async (req, res) => {
  try {
    const clientData = {
      ...req.body,
      img: handleImageUpload(req)
    };
    const newClient = new Client(clientData);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- Progress ---
router.post('/progress', async (req, res) => {
  try {
    const newProgress = new Progress(req.body);
    const savedProgress = await newProgress.save();
    res.status(201).json(savedProgress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- Projects ---
router.post('/projects', upload.single('img'), async (req, res) => {
  try {
    const projectData = {
      ...req.body,
      img: handleImageUpload(req),
      big: req.body.big === 'true' || req.body.big === true,
      done: req.body.done === 'true' || req.body.done === true
    };
    const newProject = new Project(projectData);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- Testimonials ---
router.post('/testimonials', upload.single('avatar'), async (req, res) => {
  try {
    const testimonialData = {
      ...req.body,
      avatar: handleImageUpload(req)
    };
    const newTestimonial = new Testimonial(testimonialData);
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- WhatDoing ---
router.post('/whatdoing', upload.single('img'), async (req, res) => {
  try {
    const whatDoingData = {
      ...req.body,
      img: handleImageUpload(req)
    };
    const newWhatDoing = new WhatDoing(whatDoingData);
    const savedWhatDoing = await newWhatDoing.save();
    res.status(201).json(savedWhatDoing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// --- ChatBotPrompts ---
router.post('/chatbotprompts', async (req, res) => {
  try {
    const newPrompt = new ChatBotPrompt(req.body);
    const savedPrompt = await newPrompt.save();
    res.status(201).json(savedPrompt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
