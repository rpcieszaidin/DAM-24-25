import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose'

import fs from 'fs';
import https from 'https';
import { Server } from 'socket.io';


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

    const privateKey = fs.readFileSync(process.env.KEY_PEM || '', 'utf8');
    const certificate = fs.readFileSync(process.env.CERT_PEM || '', 'utf8');
    const credentials = { key: privateKey, cert: certificate };

    const httpsServer = https.createServer(credentials, app);

    const io = new Server(httpsServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log('Un cliente se ha conectado:', socket.id);
        socket.on('mensaje', (data) => {
            console.log('Mensaje recibido:', data);
            socket.emit('respuesta', { mensaje: 'Mensaje recibido con éxito.' });
        });
        socket.on('disconnect', () => {
            console.log('Un cliente se ha desconectado:', socket.id);
        });
    });


    app.get('/', async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: 'Hello World!',
        });
    });


    try {
        httpsServer.listen(PORT, (): void => {
            console.log(`Connected successfully on port ${PORT}`);
        });
    } catch (error: any) {
        console.error(`Error occurred: ${error.message}`);
    }
})
