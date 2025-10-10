const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  const data = err.data || null;

  return res.status(status).json({
    success: false,
    message,
    data,
  });
};

module.exports = errorMiddleware;
