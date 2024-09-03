const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode) {
        case 400:
            res.status(400);
            res.json({ title: "Validation Failed",message: err.message,stackTrace: err.stack });
            break;
        case 401:
            res.status(401);
            res.json({ title: "Unauthorized",message: err.message,stackTrace: err.stack });
            break;
        case 404:
            res.status(404);
            res.json({ title: "Not Found",message: err.message,stackTrace: err.stack });
            break;
        case 500:
            res.status(500);
            res.json({ title: "Internal Server Error",message: err.message,stackTrace: err.stack });
            break;
        default:
            res.status(500);
            res.json({ title: "Internal Server Error",message: err.message,stackTrace: err.stack
            });
}};

module.exports = errorHandler;