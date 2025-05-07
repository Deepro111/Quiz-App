// const express = require('express');
// const router = express.Router();
// const Result = require('../models/Score.js');

// // POST /api/submit-score
// router.post('/api/submit-score', async (req, res) => {
//   try {
//     const { userId, topic, score,total, difficulty } = req.body;

//     if (!userId || !topic || score == null || !difficulty) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     const newResult = new Result({
//       userId,
//       topic,
//       score,
//       total,
//       difficulty,
//     });

//     const savedResult = await newResult.save();
//     res.status(201).json({ message: 'Score submitted successfully', result: savedResult });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Result = require('../models/Score.js');

// POST /api/submit-score
router.post('/api/submit-score', async (req, res) => {
  try {
    const { userId, topic, score, total, difficulty, questionSet, responses } = req.body;

    // Validate required fields
    if (!userId || !topic || score == null || !difficulty || !questionSet || !responses) {
      return res.status(400).json({ error: 'All fields are required including questions and responses' });
    }

    // Create new score document
    const newResult = new Result({
      userId,
      topic,
      score,
      total,
      difficulty,
      questionSet,
      responses
    });

    const savedResult = await newResult.save();
    res.status(201).json({ message: 'Score submitted successfully', result: savedResult });
  } catch (err) {
    console.error("Error saving score:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

