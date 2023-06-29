const express = require("express");
const { postReview } = require("../controllers/reviews/postReviews");
const { getReviews } = require("../controllers/reviews/getReviews");

const ReviewsRouter = express.Router();

ReviewsRouter.post("", postReview);
ReviewsRouter.get("",getReviews)



module.exports = ReviewsRouter;