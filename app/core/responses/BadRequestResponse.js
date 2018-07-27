const HttpResponse = require('./HttpResponse');

module.exports = class BadRequestResponse extends HttpResponse {
    constructor(message) {
        super(400, message)
    }
}