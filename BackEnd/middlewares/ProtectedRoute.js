// protectRoute.js
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_TOKEN

const ProtectedRoute = (req, res, next) => {
  // Get the token from the authorization header
  // const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  const { id } = req.query || req.body;  
  
  if (!id) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }
  
  try {
    // Verify token
    const _id = jwt.verify(id, jwtSecret);

    // Attach the user information to the request object
    req.user = _id;

    // Call next middleware or route handler
    next();
  } catch (error) {       
    res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};

module.exports = ProtectedRoute;
