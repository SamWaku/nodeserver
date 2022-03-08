const jwt = require('jasonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;

exports.auth = async (req, res, next) => {
    try {
        const token = req.token.token || req.query.token || req.headers.token;

        if (!token) {
            return res.send({ status: 403, message: "A token is required for authentication" });
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            return res.send({ status: 401, message: "Invalid token" });
        }
        return next();
    } catch (error) {
        res.send({
            status: 401,
            error,
            message: "User session expired, Login to continue",
        });
    };
}