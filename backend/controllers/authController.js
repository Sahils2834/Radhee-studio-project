const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
<<<<<<< HEAD
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashed,
      role: role || "customer"
    });

    await user.save();

    res.status(201).json({
      success: true,
      msg: "Registration successful"
    });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ msg: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secret123"
    );

    res.json({
      success: true,
      token,
      role: user.role
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
=======
  const { name, email, password, role } = req.body;

  let user = await User.findOne({ email });
  if (user) return res.json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  user = new User({ name, email, password: hashed, role });
  await user.save();

  res.json({ msg: "Registered successfully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ msg: "Incorrect password" });

  const token = jwt.sign({ id: user._id, role: user.role }, "secret123");

  res.json({
    msg: "Login success",
    token,
    role: user.role,
  });
>>>>>>> 2b4edc8727ac075520d32d42922c113472618e5a
};
