import { Schema, Model, HydratedDocument, model } from 'mongoose';

export interface IBook {
    title: string;
    isbn: string;
}

export interface IBookMethods {
    getTitle(): String
}

type BookModel = Model<IBook, {}, IBookMethods>;

const schema = new Schema<IBook, BookModel, IBookMethods>({
    title: { type: String, required: true },
    isbn: { type: String, required: true }
});

schema.methods.getTitle = function () {
    return this.isbn;
}

export const Book = model<IBook, BookModel>('Book', schema);