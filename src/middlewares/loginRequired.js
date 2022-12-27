module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken');

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login obrigatorio'],
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
            errors: ['Token inspirado ou inválido'],
        });
    }
};