const mongoose = require('mongoose');

// Schema for tracking daily progress and missed reasons
const LogSchema = new mongoose.Schema({
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  dayNumber: { type: Number, required: true },
  categories: {
    cricket: { completed: Boolean, reason: String },
    fitness: { completed: Boolean, reason: String },
    study: { completed: Boolean, reason: String },
    nutrition: { completed: Boolean, reason: String },
    mindset: { completed: Boolean, reason: String },
    sleep: { completed: Boolean, reason: String }
  },
  reflection: String,
  isRecovery: { type: Boolean, default: false }
});

module.exports = mongoose.model('Log', LogSchema);
