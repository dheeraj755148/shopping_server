const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const user = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
//all products

router.get("/getproducts", async (req, res) => {
  try {
    const productsData = await Products.find();
    //console.log("Postman Data =>", productsData);
    res.status(201).json(productsData);
  } catch (error) {
    console.log(error.message);
  }
});

//individual product

router.get("/getproductDetail/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(id)
    const individualData = await Products.findOne({ id: id });
    res.status(201).json(individualData);
  } catch (error) {
    res.status(400).json(individualData);
    console.log(error.message);
  }
});

//register users

router.post("/register", async (req, res) => {
  console.log(req.body);

  const { name, email, password, passwordAgain } = req.body;
  if (!name || !email || !password || !passwordAgain) {
    res.status(422).json({ error: "Error: All details required" });
    console.log("No data");
  }
  try {
    const temp = await user.findOne({ email: email });
    if (temp) {
      res.status(422).json({ error: "User already exists" });
    } else if (password != passwordAgain) {
      res.status(422).json({ error: "Password does not match" });
    } else {
      const pushData = new user({
        name,
        email,
        password,
        passwordAgain,
      });

      const storeData = await pushData.save();
      //console.log(storeData);

      res.status(201).json(storeData);
    }
  } catch (error) {}
});

//login user

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Error: All details required" });
    console.log("No data");
  }

  try {
    const userLogin = await user.findOne({ email: email });
    //console.log("value=>", userLogin);

    if (userLogin) {
      const matchPass = await bcrypt.compare(password, userLogin.password);
      //console.log(matchPass);

      //JWT token generations

      const token = await userLogin.generateAuthToken();
      //console.log(token);

      res.cookie("ecommerceApp", token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      if (!matchPass) {
        res.status(400).json({ error: "Invalid username or password" });
      } else {
        res.status(201).json(userLogin);
      }
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid details" });
  }
});

// add products to cart api

router.post("/addcart/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Products.findOne({ id: id });
    //console.log("Cart=> ", cart);

    const userContent = await user.findOne({ _id: req.userID });
    console.log(userContent);

    if (userContent) {
      const cartData = await userContent.addtocart(cart);
      await userContent.save();
      //console.log(cartData);
      res.status(201).json(userContent);
    } else {
      res.status(401).json({ error: "Invalid user" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid user" });
  }
});

//get cart details

router.get("/cartdetails", authenticate, async (req, res) => {
  try {
    const buy = await user.findOne({ _id: req.userID });
    //console.log(buy)
    res.status(201).json(buy);
  } catch (error) {
    console.log(error);
  }
});

//get valid user

router.get("/validateuser", authenticate, async (req, res) => {
  try {
    const validuserone = await user.findOne({ _id: req.userID });
    //console.log(buy)
    res.status(201).json(validuserone);
  } catch (error) {
    console.log(error);
  }
});

//remove cart items

router.delete("/remove/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    req.rootUser.carts = req.rootUser.carts.filter((currentValue) => {
      return currentValue.id != id;
    });

    req.rootUser.save();
    res.status(201).json(req.rootUser);
    console.log("Item removed");
  } catch (error) {
    console.log("Item not removed error");
    res.status(400).json(req.rootUser);
  }
});

//userlogout

router.get("/logout", authenticate, async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curr) => {
      return curr.token !== req.token;
    });

    res.clearCookie("ecommerceApp", {
      path: "/",
    });

    req.rootUser.save();
    res.status(201).json(req.rootUser.tokens);
    console.log("Logout");
  } catch (error) {
    console.log("Error logout");
  }
});

module.exports = router;
