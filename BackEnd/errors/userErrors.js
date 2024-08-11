class UserError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.type = 'UserError';

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UserError;