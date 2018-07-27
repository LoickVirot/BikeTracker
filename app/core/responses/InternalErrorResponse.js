const HttpResponse = require('./HttpResponse');

module.exports = class BadRequestResponse extends HttpResponse {
    constructor(message) {
        super(500, message)
    }
}