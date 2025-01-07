import { Book, IBook } from '../models/Books'

export const newBookController = async (book: Partial<IBook>) => {
    const { title, isbn } = book;
    if (!title || !isbn) {
      return {
        error: 'No hay titulo',
      }
    }

    const existingBook = await Book.findOne({ isbn })
    if (existingBook) {
      return {
        error: 'El libro ya existe.',
      }
    }
    
    const newBook = new Book({ title, isbn })
    await newBook.save();
    return {
        book : isbn 
    }
}