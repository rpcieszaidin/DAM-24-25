import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose'

import bookRouter from "./routes/bookRouter";

dotenv.config();

const dbConnect = async () => {
    if (!process.env.MONGODB_URL) {
        throw new Error('MONGODB_URL is not defined in the environment variables.')
    } else {
        return await mongoose.connect(process.env.MONGODB_URL, {
            authSource: 'admin'
        })
    }
}

dotenv.config();

dbConnect().then(() => {
    const app: Application = express();
    const PORT = process.env.PORT || 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/books', bookRouter);

    app.get('/', async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: 'Hello World 33!',
        });
    });


    try {
        app.listen(PORT, (): void => {
            console.log(`Connected successfully on port ${PORT}`);
        });
    } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
    }
})
