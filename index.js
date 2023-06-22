require('dotenv').config();
const server = require('./api/src/app.js');
const { conn } = require('./api/src/db.js');

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});
