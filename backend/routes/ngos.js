// import express from 'express';
// import multer from 'multer';
// import { v2 as cloudinary } from 'cloudinary';
// import { Readable } from 'stream';
// import dotenv from 'dotenv';

// dotenv.config();
// const router = express.Router();

// // ====== Cloudinary Config ======
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // ====== Multer Config ======
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // ====== In-memory Database ======
// let ngos = [];

// // ====== GET all NGOs ======
// router.get('/', (req, res) => {
//   res.status(200).json(ngos);
// });

// // ====== POST Add New NGO with Image ======
// router.post('/', upload.single('image'), async (req, res) => {
//   const { name, subject, description, mission, impact, founded } = req.body;
//   const file = req.file;

//   if (!name || !subject || !description || !mission || !impact || !founded || !file) {
//     return res.status(400).json({ message: 'All fields including image are required' });
//   }

//   try {
//     // Upload image to Cloudinary
//     const stream = cloudinary.uploader.upload_stream(
//       { folder: 'ngos' },
//       (error, result) => {
//         if (error) {
//           console.error(error);
//           return res.status(500).json({ error: 'Cloudinary upload failed' });
//         }

//         // Add the new NGO data with Cloudinary image URL
//         const newNgo = {
//           id: Date.now().toString(),
//           name,
//           subject,
//           description,
//           mission,
//           impact,
//           founded,
//           imageUrl: result.secure_url,
//           createdAt: new Date().toISOString(),
//         };

//         ngos.push(newNgo); // Store the NGO in the in-memory database
//         res.status(201).json(newNgo); // Return the newly added NGO
//       }
//     );

//     const bufferStream = new Readable();
//     bufferStream.push(file.buffer);
//     bufferStream.push(null);
//     bufferStream.pipe(stream);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// // ====== DELETE NGO by ID ======
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   const index = ngos.findIndex(ngo => ngo.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: 'NGO not found' });
//   }

//   ngos.splice(index, 1);
//   res.status(200).json({ message: 'NGO deleted successfully' });
// });

// export default router;





import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';
import dotenv from 'dotenv';
import db from '../firebaseAdmin.js'; // ✅ Firestore DB import

dotenv.config();
const router = express.Router();

// ====== Cloudinary Config ======
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ====== Multer Config ======
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ====== GET all NGOs from Firestore ======
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection('ngos').get();
    const ngos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(ngos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch NGOs' });
  }
});

// ====== POST Add New NGO with Image ======
router.post('/', upload.single('image'), async (req, res) => {
  const { name, subject, description, mission, impact, founded } = req.body;
  const file = req.file;

  if (!name || !subject || !description || !mission || !impact || !founded || !file) {
    return res.status(400).json({ message: 'All fields including image are required' });
  }

  try {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'ngos' },
      async (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Cloudinary upload failed' });
        }

        const newNgo = {
          name,
          subject,
          description,
          mission,
          impact,
          founded,
          imageUrl: result.secure_url,
          createdAt: new Date().toISOString(),
        };

        const docRef = await db.collection('ngos').add(newNgo); // ✅ Firestore save
        res.status(201).json({ id: docRef.id, ...newNgo });
      }
    );

    const bufferStream = new Readable();
    bufferStream.push(file.buffer);
    bufferStream.push(null);
    bufferStream.pipe(stream);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// ====== DELETE NGO by ID ======
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const doc = await db.collection('ngos').doc(id).get();

    if (!doc.exists) {
      return res.status(404).json({ message: 'NGO not found' });
    }

    await db.collection('ngos').doc(id).delete();
    res.status(200).json({ message: 'NGO deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete NGO' });
  }
});

export default router;
