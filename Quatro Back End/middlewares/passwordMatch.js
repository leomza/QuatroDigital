exports.passwordMatch = async (req, res, next) => {
  try {
    const { password, repassword } = req.body;
    if (password !== repassword) {
      return res.status(400).send({ message: "Passwords should be the same" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
