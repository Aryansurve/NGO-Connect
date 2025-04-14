import express from 'express';
const router = express.Router();

// In-memory database
let ngos = [
  { id: 1, name: "NGO 1", subject: "Health", description: "Providing healthcare in rural areas." },
  { id: 2, name: "NGO 2", subject: "Education", description: "Building schools in underserved regions." }
];

// Get all NGOs
router.get('/', (req, res) => {
  res.json(ngos);
});

// Add a new NGO
router.post('/', (req, res) => {
  const { name, subject, description } = req.body;
  if (!name || !subject || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newNgo = {
    id: Date.now(),
    name,
    subject,
    description
  };
  ngos.push(newNgo);
  res.status(201).json(newNgo);
});

// Delete an NGO
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = ngos.findIndex(ngo => ngo.id == id);
  if (index === -1) return res.status(404).json({ message: 'NGO not found' });

  ngos.splice(index, 1);
  res.status(200).json({ message: 'NGO deleted' });
});

export default router; // Export using ES module syntax

//BELOW IS FOR DYNAMODB
// const express = require('express');
// const router = express.Router();
// const db = require('../db/dynamodb');

// // Add NGO
// router.post('/add', async (req, res) => {
//   const { id, name, subject, description } = req.body;

//   const params = {
//     TableName: 'NGODetails',
//     Item: { id, name, subject, description }
//   };

//   try {
//     await db.put(params).promise();
//     res.status(200).json({ message: 'NGO added!' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error adding NGO', details: err });
//   }
// });

// // Get All NGOs
// router.get('/list', async (req, res) => {
//   const params = {
//     TableName: 'NGODetails',
//   };

//   try {
//     const data = await db.scan(params).promise();
//     res.status(200).json(data.Items);
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching NGOs', details: err });
//   }
// });

// module.exports = router;

