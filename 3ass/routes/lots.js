const express = require('express');
const Lot = require('../models/Lot');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const { title, startBid, description } = req.body;
    if (!title || !startBid || !description) {
      return res.status(400).json({ message: "All fields required" });
    }

    const lot = new Lot({ title, startBid, description });
    await lot.save();
    res.status(201).json(lot);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  const lots = await Lot.find();
  res.json(lots);
});

// READ ONE
router.get('/:id', async (req, res) => {
  const lot = await Lot.findById(req.params.id);
  if (!lot) return res.status(404).json({ message: "Lot not found" });
  res.json(lot);
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { title, startBid, description } = req.body;
    if (!title || !startBid || !description) {
      return res.status(400).json({ message: "All fields required" });
    }

    const lot = await Lot.findByIdAndUpdate(
      req.params.id,
      { title, startBid, description },
      { new: true }
    );

    if (!lot) return res.status(404).json({ message: "Lot not found" });
    res.json(lot);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const lot = await Lot.findByIdAndDelete(req.params.id);
  if (!lot) return res.status(404).json({ message: "Lot not found" });
  res.json({ message: "Deleted" });
});

module.exports = router;
