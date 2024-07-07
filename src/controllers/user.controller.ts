import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/user.service';

export const loginHandler = async (req: Request, res: Response) => {
    
  try {
    const { username, password } = req.query;
    
    const user = await loginUser(username as string, password as string);
    if (user) {
      res.json(user);
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const registerHandler = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const newUser = await registerUser(username, password);
    res.json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};