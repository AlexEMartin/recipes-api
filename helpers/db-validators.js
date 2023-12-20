const User = require("../models/user");
// const Recipe = require('../models/recipe');

// Verify that email exists
const emailExists = async (email = "") => {
  const emailNotAvailable = await User.findOne({ email });
  if (emailNotAvailable) {
    throw new Error(`This email: ${email} has already been registered`);
  }
};

module.exports = {
  emailExists,
};
