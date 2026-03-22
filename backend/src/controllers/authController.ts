import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import zxcvbn from 'zxcvbn';
import { v4 as uuidv4 } from 'uuid';
import { users } from '../models/database';

// REGISTER:
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userExists = users.find(u => u.email === email);
    if (userExists) {
      return res.status(400).send("This email is already registered!");
    }

    const passwordCheck = zxcvbn(password);
    if (passwordCheck.score < 2) {
      return res.status(400).send("Password too weak! Try another one.");
    }

    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = {
      id: uuidv4(),
      email,
      passwordHash,
      favorites: [] 
    };

    users.push(newUser);
    return res.status(201).send("User registered successfully!");
  } catch (error) {
    return res.status(500).send("Error!");
  }
};

// LOGIN:
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(401).send("Incorrect username or password.");
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).send("Incorrect username or password.");
    }

// COOKIE:
    req.session = {
      userId: user.id,
      userEmail: user.email
    };

    return res.status(200).json({ 
      message: `Welcome, ${user.email}!`,
      user: { email: user.email } 
    });
  } catch (error) {
    return res.status(500).send("Error!");
  }
};

// LOGOUT:
export const logout = (req: Request, res: Response) => {
  req.session = null;
  return res.status(200).send("Logout successful!");
};