class API_RESPONSE {
    constructor() {
        this.response = {};
    }
    setResponse(messageKey, message) {
        this.response[messageKey] = message;
    }
    passed(data) {
        this.response = {
            code: 200,
            data,
            success: true,
        }
        return this.response;
    }
    failed(errors) {
        this.response = {
            code: 400,
            message: 'Unable to perform operation',
            errors,
            success: false,
        }
        return this.response;
    }
    failedServer(errors) {
        console.log(errors);
        this.response = {
            code: 500,
            message: 'Error from server',
            errors:'check your log',
            success: false,
        }
        return this.response;
    }
    notFound(errors) {
        this.response = {
            code: 404,
            message: 'URL not found',
            errors,
            success: false,
        }
        return this.response;
    }
}

export default new API_RESPONSE();