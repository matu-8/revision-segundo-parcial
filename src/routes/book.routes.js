import express from 'express';
import { createBook, delBook, getAllBooks, getBookById, updBook} from '../controllers/book.controllers.js';

// Creación de rutas
const routerBook = express.Router(); 

     routerBook.get('/books', getAllBooks)
     routerBook.get('/books/:id', getBookById)
     routerBook.put('/books/:id',updBook)
     routerBook.post('/books', createBook)
     routerBook.delete('/books/:id', delBook)

     export default routerBook;
