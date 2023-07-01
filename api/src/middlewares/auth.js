const jwt = require('jsonwebtoken');
const { User } = require('../db.js');

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }

      try {
        const user = await User.findByPk(decodedToken.id);
        if (!user) {
          return res.sendStatus(401);
        }

        req.user = {
          id: user.id,
          email: user.email,
          role: user.role,
        };

        next();
      } catch (error) {
        return res.sendStatus(500);
      }
    });
  } else {
    res.sendStatus(401);
  }
}

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Acceso prohibido' });
    }
  };
};

module.exports = {
  authenticateJWT,
  authorizeRole
};