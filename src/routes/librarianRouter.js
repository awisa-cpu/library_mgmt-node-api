import express from 'express';
import { addLibrarian, getLibrarian, updateLibrarian, deleteLibrarian, getAllLibrarians } from '../controllers/librarianController.js';
const LibRouter = express.Router();

LibRouter.get('/',getAllLibrarians)
LibRouter.post('/',addLibrarian)
LibRouter.get('/:id',getLibrarian)
LibRouter.put('/:id',updateLibrarian)
LibRouter.delete('/:id',deleteLibrarian)

export default LibRouter;