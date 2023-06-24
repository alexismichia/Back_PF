const axios = require('axios');
const accessToken = process.env.ACCESS_TOKEN;

const createSubscription = async (subscriptionData) => {
  const requestData = {
    reason: "Premium user",
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      repetitions: 12,
      billing_day: 10,
      billing_day_proportional: true,
      free_trial: {
        frequency: 1,
        frequency_type: "months"
      },
      transaction_amount: 1000,
      currency_id: "ARS"
    },
    payment_methods_allowed: {
      payment_types: [{}],
      payment_methods: [{}]
    },
    back_url: "https://www.yoursite.com"
  };

  try {
    const response = await axios.post(
      'https://api.mercadopago.com/preapproval_plan',
      requestData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error('Failed to create subscription');
  }
};

module.exports = {
  createSubscription,
};
