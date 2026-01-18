const mongoose = require('mongoose');

const LotSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startBid: { type: Number, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Lot', LotSchema);
