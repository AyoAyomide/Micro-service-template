import { Router } from 'express';
import RESPONSE from '../helpers/@response';
export default () => {
    let api = Router();
    let apiResp;
    api.get('/', function (req, res) {
        apiResp = RESPONSE.passed('hello world');
        res.status(apiResp.code).json(apiResp);
    });
    api.get('/error', function (req, res) {
        console.log('hello sam')
        throw new Error('BROKEN');
    });
    return api;
}