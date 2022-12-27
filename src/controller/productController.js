const { pick } = require('lodash');
const ProductService =  require('../service/productService')();

const store = async (req, res) => {
    try {
        const data =  {
            ...pick(req.data, ['name','price']),
            user_id: req.userId
        }

        const product = await ProductService.create(data);

        return res.json(product);

    } catch(error) {
        return res.status(500).json({
            message: 'Não foi possível criar o produto'
        });
    }
}

const index = async (req, res) => { 
    try {
        const products = await ProductService.index(filter);

        return res.json(products);

    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao listar todos os produtos'
        });
    }
}

const show = async (req, res) => {
    try {
        const filter = pick(req.filter, ['id']);

        const product = await ProductService.show(filter)

        return res.json(product);
    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao lista produto'
        })
    }
}

const update = async (req,res) => {
    try {
        const changes = pick(req.data, ['name', 'price']);

        const filter = pick(req.filter, ['id']);

        const product = await ProductService.update(changes,filter)

        return res.json(product);

    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao atualizar Produto'
        })
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.filter;

        const product = await ProductService.remove(id);

        return res.json(product);

    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao deletar Produto'
        })
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    remove
};
