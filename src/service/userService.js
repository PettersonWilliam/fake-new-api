module.exports = () => {
    const User = require('../models/User');

    const create = async(data) => {
        console.log(data);
        const user = await User.findOne({
            where: {
                email: data.email
            }
        });
        console.log(user);

        if(user) {
            throw new Error('O usuário já existe');
        }
        return User.create(data);
    }

    return {
        create
    }
};