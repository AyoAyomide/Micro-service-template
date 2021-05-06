import { Router } from 'express';
export default () => {
    let api = Router();
    api.get('/', function (req, res) {
        res.json("hello sam");
    });
    return api;
}