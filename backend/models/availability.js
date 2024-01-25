const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  A: {
    type: Number,
    required: true,
    default: 20, 
  },
  B: {
    type: Number,
    required: true,
    default: 30, 
  },
  C: {
    type: Number,
    required: true,
    default: 10, 
  },
});

const Availability = mongoose.model('Availability', availabilitySchema);

module.exports = Availability;