exports.newUser = (req, res) => {
  try {
    res.send({ message: `Welcome ${req.body.firstName} ${req.body.lastName}` });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

exports.login = (req, res) => {
  try {
    res.send({ message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
