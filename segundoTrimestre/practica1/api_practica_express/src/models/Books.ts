import { Schema, Model, HydratedDocument, model } from 'mongoose';

export interface IBook {
    title: string;
    isbn: string;
}

const schema = new Schema<IBook>({
    title: { type: String, required: true },
    isbn: { type: String, required: true }
});


export const Book = model<IBook>('Book', schema);