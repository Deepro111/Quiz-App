const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencing the User model
    required: true,
  },
  topic: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
  },
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true,
  },
  datetime: {
    type: Date,
    default: Date.now,
  }
}, { collection: 'score' });

module.exports = mongoose.model('Score', scoreSchema);




// const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   options: { type: [String], required: true },
//   answer: { type: String, required: true }
// }, { _id: false }); // no extra _id for subdocs

// const scoreSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   topic: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   score: {
//     type: Number,
//     required: true,
//     min: 0
//   },
//   total: {
//     type: Number,
//     required: true,
//     min: 0
//   },
//   difficulty: {
//     type: String,
//     enum: ['easy', 'medium', 'hard'],
//     required: true
//   },
//   datetime: {
//     type: Date,
//     default: Date.now
//   },
//   questionSet: {
//     type: [questionSchema], // ✅ embed full question set
//     required: true
//   },
//   responses: {
//     type: [String], // ✅ e.g., ["To organize code...", "int", ...]
//     required: true
//   }
// }, { collection: 'score' });

// module.exports = mongoose.model('Score', scoreSchema);
