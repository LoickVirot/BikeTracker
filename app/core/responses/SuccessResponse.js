module.exports = class SuccessResponse extends HttpResponse {
    constructor(data = null) {
        super(200, 'OK', data)
    }
 }