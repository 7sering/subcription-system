const User = require("../models/user");
const { comparePassword, hasPassword } = require("../helpers/authHelper");
const jwt = require("jsonwebtoken");

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
      // Token Generate
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      console.log(user);
      const { password, ...rest } = user._doc;
      return res.json({
        token,
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

/////////////Login

exports.login = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    //compare password
    const match = await comparePassword(req.body.password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password please check again",
      });
    }
    // Token Generate
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const { password, ...rest } = req.body;
    res.json({
      token,
      user: rest,
    });
  } catch (error) {
    console.log(error);
  }
};
