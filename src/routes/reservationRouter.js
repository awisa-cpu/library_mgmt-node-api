import express from 'express';
import {createReservation,getReservation, deleteReservation, getReservations} from '../controllers/reservationController.js';
const ResRouter = express.Router();

ResRouter.post('/', createReservation);
ResRouter.get('/', getReservations);
ResRouter.get('/:id', getReservation);
ResRouter.delete('/:id', deleteReservation);


export default ResRouter;