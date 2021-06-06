import RESPONSE from '../helpers/@response';
import { isJson } from '../helpers/@validate';
export default (err, req, res, next) => {
    let apiResponse;
    // check if input is a valid json
    if (!isJson(req.body)) {
        apiResponse = RESPONSE.failed('Invalid JSON input')
    }

    res.status(apiResponse.code).json(apiResponse);
}