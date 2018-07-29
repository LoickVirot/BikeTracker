const HttpResponse = require('./HttpResponse');

module.exports = class BadRequestResponse extends HttpResponse {
    constructor() {
        super(401, 'You are not allowed to access to this route.')
    }
}