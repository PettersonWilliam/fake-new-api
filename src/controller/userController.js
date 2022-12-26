module.exports = () => {
    const { pick } = require('lodash');
    const UserService =  require('../service/userService')();

    const store = async (req, res) => {
        try {
            const data =  pick(req.data, ['name','email','password']);

            const user = await UserService.create(data);

            return res.json(user);
        } catch(error) {
            return res.status(500).json({
                message: 'Não foi possível criar usuário'
            });
        }
    }
    const login = async (req, res) => {
        const data = pick(req.data, ['email','password']);

        const token = await UserService.login(data);
        
        return res.json(token);
    }

    return {
        store,
        login
    }
};
