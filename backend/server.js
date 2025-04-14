

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ngoRoutes from './routes/ngos.js';

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// ====== MIDDLEWARE ======
app.use(cors());
app.use(express.json()); // JSON parser

// ====== ROUTES ======
app.use('/api/ngos', ngoRoutes); // Handles /api/ngos/* endpoints

// ====== ROOT TEST ROUTE ======
app.get('/', (req, res) => {
  res.send('✅ Backend server is up and running!');
});

// ====== START SERVER ======
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
