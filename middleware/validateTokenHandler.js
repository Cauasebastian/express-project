const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validadeToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                return next(new Error('Not authorized, token failed'));
            } else {
                req.user = decoded.user;
                console.log(decoded);
                next();
            }
        });
    } else {
        res.status(401);
        return next(new Error('Not authorized, no token'));
    }
});

module.exports = validadeToken;
