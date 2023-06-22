require('dotenv').config();
const server = require('./api/src/app.js');
const { conn } = require('./api/src/db.js');

conn.sync({ force: true }).then(() => {
  const port = process.env.PORT || 3000;
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server listening at 0.0.0.0:${port}`);
  });
});
