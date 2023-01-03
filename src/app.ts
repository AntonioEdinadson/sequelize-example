import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(routes);

export default app;