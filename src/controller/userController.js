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
        try {
            const data = pick(req.data, ['email','password']);

            const token = await UserService.login(data);
            
            return res.json(token);
        } catch(error) {
            return res.status(500).json({
                message: 'Erro ao logar Usuários'
            })
        }
    }

    const index = async (req, res) => { 
        try {
            const data = pick(req.data, ['name','email']);

            const users = await UserService.index(data);

            return res.json(users);
        } catch(error) {
            return res.status(500).json({
                message: 'Erro ao listar os Usuários'
            })
        }
    }

    const show = async (req, res) => {
        try {
            const filter = pick(req.filter, ['id']);

            const user = await UserService.show(filter)

            return res.json(user);
        } catch(error) {
            return res.status(500).json({
                message: 'Erro ao lista Usuário'
            })
        }
    }

    const update = async (req,res) => {
        try {
            const changes = pick(req.data, ['name', 'email']);

            const filter = pick(req.filter, ['id']);

            const userEdit = await UserService.update(changes,filter)

            return res.json(userEdit);

        } catch(error) {
            return res.status(500).json({
                message: 'Erro ao atualizar Usuário'
            })
        }
    }

    const deleteUser = async (req,res) => {
        try {
            const { id } = req.filter;

            const user = await UserService.deleteUser(id);

            return res.json(user);

        } catch(error) {
            console.log(error);
            return res.status(500).json({
                message: 'Erro ao deletar Usuário'
            })
        }
    };

    return {
        store,
        login,
        index,
        show,
        update,
        deleteUser
    }
};
