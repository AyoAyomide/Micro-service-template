require('dotenv').config();
import RESPONSE from '../helpers/@response';
import { Router } from 'express';

export default () => {
    let routes = Router();
    // check if input is a valid json
    routes.all('/info', function (req, res, next) {
        let apiResponse;
        apiResponse = RESPONSE.passed('yes we are cool')
        res.status(apiResponse.code).json(apiResponse);
    })
    return routes;
}