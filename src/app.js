require('dotenv').config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import middleware from './middleware';
import api from './api';
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.use(cookieParser());

// 3rd party middleware
app.use(cors({
    exposedHeaders: ["links"]
}));

// internal middleware
app.use(middleware());

// api router
app.use('/api', api());

export default app;