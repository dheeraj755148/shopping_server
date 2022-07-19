const jwt = require("jsonwebtoken");
const user = require("../models/userSchema");
const secretKey = process.env.KEY;

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.ecommerceApp;
    const verifyToken = jwt.verify(token, secretKey);
    console.log("Verified id=> ", verifyToken);

    const rootUser = await user.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log("Root user=> ", rootUser);

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized user: No token found");
  }
};

module.exports = authenticate;
