const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control']
}));

app.set('etag', false);
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  next();
});

app.use(helmet());
app.use(morgan('dev'));

// Routes
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin');

app.use('/api', apiRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
