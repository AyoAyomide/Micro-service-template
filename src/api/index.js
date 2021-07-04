import { Router } from 'express';
import RESPONSE from '../helpers/@response';
export default () => {
    let api = Router();
    let apiResp;
    api.get('/', function (req, res) {
        apiResp = RESPONSE.passed('hello james');
        res.status(apiResp.code).json(apiResp);
    });
    return api;
}