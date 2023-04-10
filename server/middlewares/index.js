var { expressjwt: jwt } = require("express-jwt");

exports.requireSignin = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
  algorithms: ["HS256"],
});
