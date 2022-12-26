const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required'],
        });
    }

    const [, token] = authorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados;
        req.userId = id;
        req.userEmail = email;
        next();
    } catch (e) {
        return res.status(401).json({
            errors: ['Expired or invalid token'],
        });
    }
};