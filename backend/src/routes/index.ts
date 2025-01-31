import express from 'express';
import userRoutes from './userRoutes';
import ticketRoutes from './ticketRoutes';
import eventRoutes from './eventRoutes';
import bookingRoutes from './bookingRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tickets', ticketRoutes);
router.use('/events', eventRoutes);
router.use('/bookings', bookingRoutes);

export default router; 