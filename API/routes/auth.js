const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

//REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString(),
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json({ result: 'user saved Successfully', savedUser })
  } catch (err) {
    res.status(500).json(err)
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
    !user && res.status(401).json('wrong User Name')

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_KEY
    )

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    const inputPassword = req.body.password

    originalPassword != inputPassword &&
      res.status(401).json('wrong credential')

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: '2d' }
    )

    const { password, ...others } = user._doc
    res.status(200).json({ ...others, accessToken })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
