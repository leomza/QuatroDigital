exports.completeInformation = async (req, res, next) => {
  try {
    const { firstName, lastName, address, addressNumber, city, phoneNumber } =
      req.body;

    if (
      (!firstName, !lastName, !address, !addressNumber, !city, !phoneNumber)
    ) {
      return res
        .status(400)
        .send({ message: "Must complete the required fields" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
