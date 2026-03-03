const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 NIR 60 Database Connected"))
  .catch(err => console.log(err));

const Log = require('./models/Logs');

// API to save/update daily progress
app.post('/api/update-day', async (req, res) => {
  const { date, dayNumber, categories, reflection } = req.body;
  try {
    const updatedLog = await Log.findOneAndUpdate(
      { date },
      { dayNumber, categories, reflection },
      { upsite: true, new: true }
    );
    res.json(updatedLog);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
