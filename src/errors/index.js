import RESPONSE from '../helpers/@response';
export default (err, req, res, next) => {
    let apiResponse;
     // check if input is a valid json
    if (err.type == 'entity.parse.failed') {
        apiResponse = RESPONSE.failed('Invalid JSON input')
    } else {
        apiResponse = RESPONSE.failedServer(err);
    }
    res.status(apiResponse.code).json(apiResponse);
}