const axios = require('axios');

exports.getNews = async (req, res) => {
  try {
    const response = await axios.get('https://gnews.io/api/v4/search?q=futbol%20internacional&lang=es&max=15&apikey=e3134327986b1dbcdd9c1c765791f1b6');
    const articles = response.data.articles;

    if (articles.length === 0) {
      return res.status(404).json({ message: 'No Articles found' });
    }

    // Mapear los datos necesarios de los artículos
    const teams = articles.map((article) => ({
      title: article.title,
      description: article.description,
      content: article.content,
      url: article.url,
      image: article.image,
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name,
        url: article.source.url,
      },
    }));

    res.status(200).json(teams);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
