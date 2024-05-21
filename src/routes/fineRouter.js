import express from 'express';
import { createFine, getFine, payFine, getAllMemberFines } from '../controllers/fineController.js';
const fineRouter = express.Router()


fineRouter.post('/',createFine);
fineRouter.post('/pay',payFine);
fineRouter.get('/:id',getFine);
fineRouter.get('/:id',getAllMemberFines);



export default fineRouter;