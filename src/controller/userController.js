module.exports = () => {
    const { pick } = require('lodash');
    const UserService =  require('../service/userService')();

    const store = async (req, res) => {
        try {
            const data =  pick(req.data, ['name','email','password']);

            const user = await UserService.create(data);

            return res.json(user);
        } catch(error) {
            console.log(error);
            return res.status(500).json({
                message: 'Não foi possível criar usuário'
            });
        }
    }

    return {
        store
    }
};
