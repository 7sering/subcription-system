const User = require("../models/user");
const { comparePassword, hasPassword } = require("../helpers/authHelper");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and min 6 character",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    // HashPassword
    const hashedPassword = await hasPassword(password);
    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();
      console.log(user);
      const { password, ...rest } = user._doc;
      return res.json({
        user: rest,
      });
    } catch (error) {
      console.log(error);
    }

    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
