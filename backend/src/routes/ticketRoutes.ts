import express from 'express';
import { TicketController } from '../controllers/ticketController';
import { authMiddleware } from '../helpers/authMiddleware';
import { validateTicketData } from '../helpers/validationMiddleware';

const router = express.Router();
const ticketController = new TicketController();

router.post('/', authMiddleware, validateTicketData, ticketController.createTicket);
router.get('/', ticketController.getTickets);
router.get('/:id', ticketController.getTicketById);
router.put('/:id', authMiddleware, ticketController.updateTicket);
router.delete('/:id', authMiddleware, ticketController.deleteTicket);

export default router; 