const { Reviews } = require('../../db');

exports.getReviews = async (req, res) => {
    try {
      const reviews = await Reviews.findAll();
      res.status(200).json(reviews);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };