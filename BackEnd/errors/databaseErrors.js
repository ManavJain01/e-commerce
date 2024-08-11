class DatabaseError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.type = 'DatabaseError';

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = DatabaseError;