import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TicketController {
  async createTicket(req: Request, res: Response) {
    try {
      const {
        eventName,
        eventDate,
        venueName,
        venueAddress,
        eventDescription,
        tickettype,
        quantity,
        price,
        images,
        ticketDescription,
        termsAndConditions
      } = req.body;

      const userId = req.user.id; // From auth middleware

      const ticket = await prisma.tickets.create({
        data: {
          eventName,
          eventDate: new Date(eventDate),
          venueName,
          venueAddress,
          eventDescription,
          tickettype,
          quantity,
          price,
          images,
          ticketDescription,
          termsAndConditions,
          authorId: userId
        }
      });

      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ message: 'Error creating ticket', error });
    }
  }

  async getTickets(req: Request, res: Response) {
    try {
      const tickets = await prisma.tickets.findMany({
        include: {
          author: {
            select: {
              name: true,
              email: true
            }
          }
        }
      });
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tickets', error });
    }
  }

  async getTicketById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const ticket = await prisma.tickets.findUnique({
        where: { id },
        include: {
          author: {
            select: {
              name: true,
              email: true
            }
          }
        }
      });

      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }

      res.json(ticket);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching ticket', error });
    }
  }

  async updateTicket(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const updateData = req.body;

      // Check if user owns the ticket
      const ticket = await prisma.tickets.findUnique({
        where: { id }
      });

      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }

      if (ticket.authorId !== userId) {
        return res.status(403).json({ message: 'Not authorized to update this ticket' });
      }

      const updatedTicket = await prisma.tickets.update({
        where: { id },
        data: updateData
      });

      res.json(updatedTicket);
    } catch (error) {
      res.status(500).json({ message: 'Error updating ticket', error });
    }
  }

  async deleteTicket(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user.id;

      // Check if user owns the ticket
      const ticket = await prisma.tickets.findUnique({
        where: { id }
      });

      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }

      if (ticket.authorId !== userId) {
        return res.status(403).json({ message: 'Not authorized to delete this ticket' });
      }

      await prisma.tickets.delete({
        where: { id }
      });

      res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting ticket', error });
    }
  }
} 