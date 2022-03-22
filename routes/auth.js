const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // we will hash the pwd using cryptoJS
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY)
      .toString(),
  });
  try {
    const savedUser = await newUser.save();
    // console.log(savedUser)
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Route
router.post("/login", async (req,res) => {
  try{

    const user = await User.findOne({ username: req.body.username});
    !user && res.status(401).json("Wrong Credentials")

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY)
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    if(Originalpassword !== req.body.password){
      res.status(401).json("Wrong Credentials")
    } 

    const accessToken = jwt.sign({
      id:user._id,
      isAdmin: user.isAdmin
    },
    process.env.JWT_SECRET_KEY,
    {expiresIn:"1d"}
    )

    const {password, ...others } = user._doc;
    res.status(200).json({...others, accessToken});

  }catch(err){
    res.status(500).json(err);
  }

})


module.exports = router;
