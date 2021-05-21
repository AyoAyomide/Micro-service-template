require('dotenv').config();
import { Router } from 'express';
export default () => {
    let routes = Router();
    routes.get('/info', function (req, res, next) {
        if (process.env.NODE_ENV == "dev") {
            res.json({ env: process.env.NODE_ENV });
            next();
        }
        else if (process.env.NODE_ENV != "dev") {
            res.json({ env: process.env.NODE_ENV });
            next();
        }

    })
    return routes;
}