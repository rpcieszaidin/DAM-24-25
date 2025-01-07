import express, { Router, Request, Response } from 'express';
import { IBook, Book } from '../models/Books';
import { newBookController } from '../controllers/bookController';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const books = await Book.find().select('-__v -_id');;
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los libros' });
    }

});

router.post('/new', async (req: Request, res: Response): Promise<Response> => {
    const bookData: Partial<IBook> = {
        title: req.body.title,
        isbn: req.body.isbn
    }
    const newBook = await newBookController(bookData)
    if (newBook.error) {
        return res.status(400).json({
            error: newBook.error,
        })
    }
    return res.status(201).json(newBook)
});

router.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el libro' });
    }
});

router.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ error: 'Libro no encontrado' });
        return res.status(200).json(updatedBook);
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el libro' });
    }
});

export default router