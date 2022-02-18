exports.passwordStrong = async (req, res, next) => {
  try {
    const { password } = req.body;
    const passRegExRule =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/;
    const passRegEx = new RegExp(passRegExRule, "gm");
    if (!passRegEx.test(password)) {
      return res.status(400).send({
        message:
          "Your password must contain 6-8 characters, at least one uppercase letter, one lowercase letter, one number and one special character. Please try again",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
