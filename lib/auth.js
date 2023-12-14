// lib/auth.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key'; // Replace with the same secret key used in login.js

export const generateToken = (user) => {
  return jwt.sign(user, SECRET_KEY, {
    expiresIn: '1h',
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
