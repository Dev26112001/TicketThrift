import { Request, Response, NextFunction } from 'express';

export const validateTicketData = (req: Request, res: Response, next: NextFunction) => {
  const {
    eventName,
    eventDate,
    venueName,
    venueAddress,
    eventDescription,
    tickettype,
    quantity,
    price
  } = req.body;

  if (!eventName || !eventDate || !venueName || !venueAddress || !eventDescription || 
      !tickettype || !quantity || !price) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  if (quantity <= 0) {
    return res.status(400).json({ message: 'Quantity must be greater than 0' });
  }

  if (price <= 0) {
    return res.status(400).json({ message: 'Price must be greater than 0' });
  }

  next();
}; 