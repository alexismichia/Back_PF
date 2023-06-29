const { Reviews } = require('../../db');

// Crear una nueva review
exports.postReview = async (req, res) => {
  try {
    const { rating, topic, description } = req.body;
    const newReview = await Reviews.create({ rating, topic, description });
    res.status(201).json(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};