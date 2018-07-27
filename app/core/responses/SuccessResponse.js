const HttpResponse = require('./HttpResponse')

module.exports = class SuccessResponse extends HttpResponse {
    constructor(data = null) {
        super(200, data)
    }
 }