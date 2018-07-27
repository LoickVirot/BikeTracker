module.exports = class HttpResponse extends Error {
    constructor(statusCode, data = null) {
        super({
            statusCode: statusCode,
        });
        this.statusCode = statusCode;
        this.data = data;
    }
}