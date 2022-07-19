const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not valid email address");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  passwordAgain: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: [],
});

//middleware for hashing (Before saving)
userSchema.pre("save", async function (e) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.passwordAgain = await bcrypt.hash(this.passwordAgain, 10);
  }
  e(); //Continue process after hashing
});

//token generation

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      {
        _id: this._id,
      },
      secretKey
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

//cart addition

userSchema.methods.addtocart = async function (cart) {
  try {
    this.carts = this.carts.concat(cart);
    await this.save();
    return this.carts;
  } catch (error) {
    console.log(error);
  }
};

const user = new mongoose.model("user", userSchema);

module.exports = user;
