import express from 'express';
import { createFine, getFine, payFine, getAllMemberFines, getAllFines } from '../controllers/fineController.js';
const fineRouter = express.Router()


fineRouter.get('/',getAllFines);
fineRouter.post('/',createFine);
fineRouter.post('/pay',payFine);
fineRouter.get('/:id',getFine);
fineRouter.get('/:id',getAllMemberFines);



export default fineRouter;