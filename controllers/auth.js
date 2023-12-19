const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const { generateJWT } = require("../helpers/generate-jwt");


const login = async (req, res = response) => {

  const { email, password } = req.body;

   try {
    //  Verify email address
     const user = await User.findOne({ email });

     if (!user) {
       return res.status(400).json({
         msg: "Invalid credentials",
       });
     }

    //  Verify password
     const validPassword = bcryptjs.compareSync(password, user.password);
     if (!validPassword) {
       return res.status(400).json({
         msg: "Invalid credentials",
       });
     }

    // Generate el JWT
     const token = await generateJWT(user._id);

     return res.json({
       user,
       idToken: token,
     });
   } catch (error) {
     console.log(error);
     return res.status(500).json({
       msg: "Server error",
     });
   }
};

const register = async (req, res = response) => {

  const { email, password } = req.body;

   try {

     let user = await User.findOne({ email });

     if (!user) {
    // Create user
       const data = {
         email,
         password,
       };

       user = new User(data);

       const salt = bcryptjs.genSaltSync();
       user.password = bcryptjs.hashSync(password, salt);

       await user.save();
     }

    // Generate JWT
     const token = await generateJWT(user._id);

     res.json({
       user,
       idToken: token,
     });

   } catch (error) {
     res.status(400).json({
       msg: "Cannot register user",
     });
   }
};

module.exports = {
  login,
  register,
};