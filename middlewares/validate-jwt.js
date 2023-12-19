const { response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validateJWT = async(req, res = response, next) => {

  const { auth } = req.query;

  const token = auth;

  if (!token) {
    return res.status(401).json({
      msg: "There is no token in the request",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    const user = await User.findById(id);

    if(!user) {
        return res.status(401).json({
            msg: "Invalid token - The user is not registered in the database",
        });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid token",
    });
  }
};

module.exports = {
  validateJWT,
};
