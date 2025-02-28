import Router from "express";
const authroutes=Router()
import "dotenv/config"
authroutes.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === process.env.email && password === process.env.pass) {
      res.json({ success: true, message: 'Login successful!' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
  export default authroutes;