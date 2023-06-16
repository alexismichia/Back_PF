const jwt = require('jsonwebtoken');
const { User } = require('../db.js');

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log('authHeader:', authHeader);  

  if (authHeader) {
      const token = authHeader.split(' ')[1];
      console.log('Token:', token);  

      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) {
              console.log('JWT verify error:', err);  
              return res.sendStatus(403);
          }
          console.log('User:', user);  

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};


const authorizeRole = (role) => {
    return [
      authenticateJWT,
      async (req, res, next) => {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user && user.role === role) {
          next();
        } else {
          res.status(403).json({ message: 'Acceso prohibido' });
        }
      }
    ];
};

module.exports = {
  authenticateJWT,
  authorizeRole
};
