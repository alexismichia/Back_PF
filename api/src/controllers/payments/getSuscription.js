const subscriptionService = require('../../services/payments/payments.service');

const createSubscription = async (req, res) => {
  try {
    const subscriptionData = req.body;
    const subscription = await subscriptionService.createSubscription(subscriptionData);
    res.status(201).json(subscription);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create subscription', message: error.message });
  }
};

module.exports = {
  createSubscription,
};
