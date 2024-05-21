import express from 'express';
import { createLoan , getLoans, getLoan,updateLoan,searchLoans, deleteLoan} from '../controllers/loanController.js';
const LoanRouter = express.Router();

LoanRouter.post('/', createLoan);
LoanRouter.get('/', getLoans);
LoanRouter.get('/search', searchLoans);
LoanRouter.get('/:id', getLoan);
LoanRouter.put('/:id', updateLoan);
LoanRouter.delete('/:id', deleteLoan);





export default LoanRouter;