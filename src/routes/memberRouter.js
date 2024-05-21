import express from 'express';
import {addMember, getMember, getMembers, updateMember, deleteMember, searchMembers} from '../controllers/memberController.js';
import {getMemberLoans}  from '../controllers/loanController.js';
import {getMemberReservations} from '../controllers/reservationController.js';
import { getAllMemberFines } from '../controllers/fineController.js';
const memberRouter = express.Router();

memberRouter.get('/', getMembers);
memberRouter.post('/', addMember);
memberRouter.get('/search', searchMembers);
memberRouter.get('/:id', getMember);
memberRouter.put('/:id', updateMember);
memberRouter.delete('/:id', deleteMember);
memberRouter.get('/loans/:id',getMemberLoans);
memberRouter.get('/reservations/:id',getMemberReservations);
memberRouter.get('/fines/:id',getAllMemberFines);







export default memberRouter;