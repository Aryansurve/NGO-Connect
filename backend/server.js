import express from 'express';
import cors from 'cors';
import ngoRoutes from './routes/ngos.js'; // Make sure this file exists

const app = express();
const PORT = process.env.PORT || 5000;

// ====== MIDDLEWARE ======
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// ====== API ROUTES ======
app.use('/api/ngos', ngoRoutes); // Handles /api/ngos/* routes

// ====== TEST ROUTE ======
app.get('/', (req, res) => {
  res.send('✅ Backend server is up and running!');
});

// ====== SERVER START ======
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
