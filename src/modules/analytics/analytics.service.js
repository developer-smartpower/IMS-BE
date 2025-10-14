const AppError = require("../../utils/AppError");
const analyticshModel = require("./analytics.model");

const getAnalyticsSummary = async () => {
  try {
    const response = await analyticshModel.signIn();
    return response;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError();
  }
};

module.exports = {
  getAnalyticsSummary,
};
