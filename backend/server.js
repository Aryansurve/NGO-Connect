import express from 'express';
import cors from 'cors';
import path from 'path';
import ngoRoutes from './routes/ngos.js'; // Correct path with '.js'

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(process.cwd(), 'Frontend', 'public'))); // Adjust the path as needed

// Routes
app.use('/api/ngos', ngoRoutes); // This should correctly link to the NGO routes

app.get('/', (req, res) => {
  res.send('✅ Backend server is up and running!');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
