class OtherError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.type = 'OtherError';

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = OtherError;