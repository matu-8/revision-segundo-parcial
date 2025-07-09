import express from 'express';
import { getAllBooks, getBookById} from '../controllers/book.controllers.js';

// Creación de rutas
const routerBook = express.Router(); 

     routerBook.get('/books', getAllBooks)
     routerBook.get('/books/:id', getBookById)
     // routerBook.put('/books/:',)
     // routerBook.post('/api/books:id:',updBook)
     // routerBook.delete('/api/books/:id:')

     export default routerBook;
