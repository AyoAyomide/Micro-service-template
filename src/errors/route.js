import { Router } from 'express';
import RESPONSE from '../helpers/@response';
export default () => {
    let apiResp = RESPONSE.notFound('Not found');
    let routesErr = Router();
    routesErr.all('*', function (req, res) { res.status(apiResp.code).send(apiResp); });
    return routesErr;
}