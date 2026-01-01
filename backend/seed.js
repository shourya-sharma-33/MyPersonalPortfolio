const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Models
const Blog = require('./models/Blog');
const Client = require('./models/Client');
const Progress = require('./models/Progress');
const Project = require('./models/Project');
const Testimonial = require('./models/Testimonial');
const WhatDoing = require('./models/WhatDoing');
const ChatBotPrompt = require('./models/ChatBotPrompt');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// helper for random images
const img = (w, h, sig) =>
  `https://source.unsplash.com/random/${w}x${h}?sig=${sig}`;

const seedData = async () => {
  try {
    // Clear existing data
    await Blog.deleteMany();
    await Client.deleteMany();
    await Progress.deleteMany();
    await Project.deleteMany();
    await Testimonial.deleteMany();
    await WhatDoing.deleteMany();
    await ChatBotPrompt.deleteMany();

    console.log('🔥 Data Destroyed');

    // Blogs
    const blogs = [
      {
        img: img(800, 500, 1),
        title: "Simple Intro to gRPC",
        text: "Simple intro to gRPC and comparison with REST APIs",
        link: "#",
      },
      {
        img: img(800, 500, 2),
        title: "Kafka From Scratch",
        text: "Kafka internals, producers, consumers and brokers",
        link: "#",
      },
      {
        img: img(800, 500, 3),
        title: "Monolith vs Microservices",
        text: "Tradeoffs between monoliths and distributed systems",
        link: "#",
      },
      {
        img: img(800, 500, 4),
        title: "Node.js Performance",
        text: "Event loop, clustering and scaling techniques",
        link: "#",
      },
    ];

    // Clients
    const clients = [
      { img: img(200, 200, 11), link: "#" },
      { img: img(200, 200, 12), link: "#" },
      { img: img(200, 200, 13), link: "#" },
      { img: img(200, 200, 14), link: "#" },
      { img: img(200, 200, 15), link: "#" },
    ];

    // Progress / Timeline
    const progress = [
      {
        sequence: 1,
        title: "Class 10th CBSE Boards",
        date: "2022 - 2023",
        details: "Scored 89% in CBSE Boards",
      },
      {
        sequence: 2,
        title: "Started Web Development",
        date: "2023",
        details: "HTML, CSS, JavaScript, React",
      },
      {
        sequence: 3,
        title: "Backend & Databases",
        date: "2024",
        details: "Node.js, MongoDB, PostgreSQL, Redis",
      },
      {
        sequence: 4,
        title: "System Design & Microservices",
        date: "2025",
        details: "Kafka, RabbitMQ, Docker, gRPC",
      },
    ];

    // Projects
    const projects = [
      {
        img: img(900, 600, 21),
        title: "Portfolio With Interactive Avatar",
        cat: "Web Development",
        desc: "React, Three.js and Tailwind based portfolio",
        big: true,
        link: "#",
        done: true,
      },
      {
        img: img(900, 600, 22),
        title: "Microservices Chat App",
        cat: "Backend",
        desc: "Event-driven chat application using Kafka",
        big: false,
        link: "#",
        done: true,
      },
      {
        img: img(900, 600, 23),
        title: "Admin Dashboard",
        cat: "Full Stack",
        desc: "Admin panel with Clerk authentication",
        big: false,
        link: "#",
        done: false,
      },
      {
        img: img(900, 600, 24),
        title: "CI/CD Pipeline",
        cat: "DevOps",
        desc: "Dockerized apps with GitHub Actions",
        big: false,
        link: "#",
        done: true,
      },
    ];

    // Testimonials
    const testimonials = [
      {
        avatar: img(150, 150, 31),
        name: "Dmeow",
        text: "Excellent work ethic and solid backend skills.",
        date: "2021-06-14",
        formattedDate: "14 June, 2021",
      },
      {
        avatar: img(150, 150, 32),
        name: "Alex Johnson",
        text: "Very reliable and clean code delivery.",
        date: "2022-09-03",
        formattedDate: "03 September, 2022",
      },
      {
        avatar: img(150, 150, 33),
        name: "Priya Verma",
        text: "Strong fundamentals and quick learner.",
        date: "2023-02-18",
        formattedDate: "18 February, 2023",
      },
    ];

    // What Doing
    const whatDoing = [
      {
        img: img(300, 300, 41),
        title: "Microservices Chat Application",
        text: "Event-driven architecture using Kafka",
      },
      {
        img: img(300, 300, 42),
        title: "Learning Cybersecurity & DevOps",
        text: "Secure APIs, CI/CD and cloud deployment",
      },
      {
        img: img(300, 300, 43),
        title: "Open Source Contributions",
        text: "Actively contributing to OSS projects",
      },
    ];

    // ChatBot Prompts
    const chatBotPrompts = [
      { sequence: 1, prompt: "Learned Clerk authentication" },
      { sequence: 2, prompt: "Explored Kafka consumer groups" },
      { sequence: 3, prompt: "Optimized MongoDB schemas" },
      { sequence: 4, prompt: "Deployed Dockerized Node.js app" },
    ];

    // Insert Data
    await Blog.insertMany(blogs);
    await Client.insertMany(clients);
    await Progress.insertMany(progress);
    await Project.insertMany(projects);
    await Testimonial.insertMany(testimonials);
    await WhatDoing.insertMany(whatDoing);
    await ChatBotPrompt.insertMany(chatBotPrompts);

    console.log('✅ Data Imported Successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
