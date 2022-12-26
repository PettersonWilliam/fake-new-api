module.exports = () => {
    const User = require('../models/User');
    const jwt = require('jsonwebtoken');
    const { compareSync } = require('bcrypt');

    const create = async(data) => {
        const user = await User.findOne({
            where: {
                email: data.email
            }
        });

        if(user) {
            throw new Error('O usuário já existe');
        }
        return User.create(data);
    }

    const login = async (data) => {
        const user = await User.findOne({
            where: {
                email: data.email;
            },
            raw: true,
            attributes: ['id','nome','email','password']
        });

        if(!user) {
            throw new Error('Usuário já existe');
        }

        const isValidPassword = compareSync(data.password, user.password);

		if (!isValidPassword) {
			throw new Error('Usuário inválido');
		}

		return jwt.sign({
			id: user.id,
			name: user.name,
			email: user.email,
		},  process.env.TOKEN_SECRET , {
			expiresIn: process.env.TOKEN_EXPIRATION
		});
    }

    return {
        create,
        login
    }
};