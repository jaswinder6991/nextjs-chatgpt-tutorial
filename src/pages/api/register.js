import dbConnect from '../../../config/db'
import User from '../../../models/User'
//const User = require('../../../models/User')

const registerUser = async (req, res) => {
  //
  try {
    const { issuer, email } = req.body
    console.log(issuer)
    await dbConnect()

    // Check if the user already exists in MongoDB
    const existingUser = await User.findOne({ issuer })
    if (existingUser) {
      return res.status(201).json({ message: 'User already registered' })
    }

    // Create a new user document in MongoDB
    const newUser = new User({
      issuer,
      email,
      weightLossGoals: ''
      // Assign other fields as needed
    })

    await newUser.save()

    console.log('User registered successfully:', newUser)
    return res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error('Error registering user:', error)
    return res.status(500).json({ message: 'Server error' })
  }
}

export default registerUser
//module.exports = { registerUser };
