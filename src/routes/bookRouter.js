import express from 'express';
import { addBook, getBook, getBooks, updateBook,deleteBook,searchBooks} from '../controllers/bookController.js';
const router = express.Router();

//order matters: hence always define static routes first before Parameterized routes
router.get('/',getBooks);
router.post('/',addBook);
router.get('/search',searchBooks)
router.get('/:id',getBook);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);


export default router;