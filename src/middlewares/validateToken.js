const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const authheader = req.headers["authorization"];
  const token = authheader && authheader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, "ims_access", (err, data) => {
    if (err) return res.status(403);

    req.user_id = data.user_id;
    console.log("lkajsdkjlaskjd", req);

    next();
  });
};

module.exports = validateToken;
