const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const {setTokenCookie} = require('../utils/cookieUtils')

const prisma = new PrismaClient();

const register = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { username, password: hashedPassword, email }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'User already exists' });
  }
};

// User login
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await prisma.user.findUnique({
      where: { username }  // Assuming 'username' is a unique identifier for your users
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    setTokenCookie(res, token);
    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const checkAuth = (req,res) =>{
  if(req.user){
    res.json({user: req.user});
  } else{
    res.status(401).json({error: 'Not authenticated'});
  }
}
const logout = async (req, res) =>{
  res.clearCookie('jwt', {httpOnly: true, });
  res.json({message: "Logout successful"})
}

module.exports = { register, login, checkAuth, logout };