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
                email: data.email
            },
            raw: true,
            attributes: ['id','name','email','password']
        });

        if(!user) {
            throw new Error('Usuário ou senha inválidos');
        }

        const isValidPassword = compareSync(data.password, user.password);

		if (!isValidPassword) {
			throw new Error('Usuário ou senha inválidos');
		}

		return jwt.sign({
			id: user.id,
			name: user.name,
			email: user.email,
		},  process.env.TOKEN_SECRET , {
			expiresIn: process.env.TOKEN_EXPIRATION
		});
    }

    const index = async () => {
        const users = await User.findAll({attributes: ['name', 'email'] });

        return users;
    }

    const show = async (filter) => {
        const user = await User.findOne({
            where: {
                id: filter.id,
                deleted_at: null
            },
            paranoid: false
        });

        if(!user) {
            throw new Error('Usuário não existe');
        }
        return user;
    }

    const update = async (changes, filter) => {
        const userEdit = await User.update(changes, {
            where: {
                id: filter.id,
                deleted_at: null
            },
            paranoid: false
        });

        return userEdit;
    }

    const deleteUser = async (id) => {
        await User.destroy({
            where: {
                id,
                deleted_at: null
            },
            paranoid: false
        })
        return true
    }

    return {
        create,
        login,
        index,
        show,
        update,
        deleteUser
    }
};