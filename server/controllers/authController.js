exports.register = async (req, res) => {
  try {
    const { name, password } = req.body;
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

    res.json({
      data: "This is /register endpoint",
    });
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
