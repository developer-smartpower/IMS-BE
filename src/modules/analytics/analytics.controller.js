const responseHandler = require("../../utils/ResponseHandler");
const analyticsService = require("./analytics.service");

const getAnalyticsSummary = async (req, res, next) => {
  const {} = req.body;
  try {
    const response = await analyticsService.getAnalyticsSummary();
    responseHandler(res, response, "success", 200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAnalyticsSummary,
};
