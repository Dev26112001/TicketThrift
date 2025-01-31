import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePassword } from '../helpers/passwordHelper';
import { generateToken } from '../helpers/jwtHelper';

const prisma = new PrismaClient();

export class UserController {
  async register(req: Request, res: Response) {
    try {
      const { email, password, name, phoneNumber } = req.body;
      
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await hashPassword(password);
      
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          phoneNumber
        }
      });

      const token = generateToken(user.id);
      
      res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name } });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isValidPassword = await comparePassword(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      const token = generateToken(user.id);
      
      res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const userId = req.user.id; // From auth middleware
      
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          tickets: true,
          bookings: true
        }
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching profile', error });
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const userId = req.user.id; // From auth middleware
      const { name, phoneNumber } = req.body;
      
      const user = await prisma.user.update({
        where: { id: userId },
        data: { name, phoneNumber }
      });

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error updating profile', error });
    }
  }
} 