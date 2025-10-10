class AppError extends Error {
  constructor(message, status, code, details) {
    super(message);

    this.status = status || 500;
    this.code = code;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
