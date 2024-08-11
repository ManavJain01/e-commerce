// Importing Error files
const UserError = require('../errors/userErrors');
const DatabaseError = require('../errors/databaseErrors');
const OtherError = require('../errors/otherErrors');

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  if (err instanceof UserError) {
    // Handle User Errors
    res.status(statusCode).json({
      success: false,
      type: 'User Error',
      message,
    });
  } else if (err instanceof DatabaseError) {
    // Handle Database Errors
    res.status(statusCode).json({
      success: false,
      type: 'Database Error',
      message,
    });
  } else if (err instanceof OtherError) {
    // Handle Other Errors
    res.status(statusCode).json({
      success: false,
      type: 'Other Error',
      message,
    });
  } else {
    // Handle Unknown Errors
    res.status(500).json({
      success: false,
      type: 'Unknown Error',
      message: 'An unknown error occurred',
    });
  }
};

module.exports = { errorHandler };