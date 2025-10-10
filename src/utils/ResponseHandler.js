const responseHandler = (res, data, message, status) => {
  if (data) {
    return res.status(status).json({ message, data });
  }
  return res.status(status).json({ message });
};

module.exports = responseHandler;
