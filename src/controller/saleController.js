const { pick } = require('lodash');
const SaleService =  require('../service/saleService')();

const store = async (req, res) => {
    try {
        const data =  {
            ...pick(req.data, ['product_id']),
            user_id: req.userId
        }

        const sale = await SaleService.create(data);

        return res.json(sale);

    } catch(error) {
        return res.status(500).json({
            message: 'Não foi possível criar a venda'
        });
    }
}

const index = async (req, res) => { 
    try {
        const filter = pick(req.filter, ['id']);

        const sales = await SaleService.index(filter);

        return res.json(sales);

    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao listar todas as vendas'
        });
    }
}

const show = async (req, res) => {
    try {
        const filter = pick(req.filter, ['id']);

        const sale = await SaleService.show(filter)

        return res.json(sale);
    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao listar a venda'
        })
    }
}

const update = async (req,res) => {
    try {
        const changes = pick(req.data, ['product_id']);

        const filter = pick(req.filter, ['id']);

        const sale = await SaleService.update(changes,filter)

        return res.json(sale);

    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao atualizar venda'
        })
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.filter;

        const sale = await SaleService.remove(id);

        return res.json(sale);

    } catch(error) {
        return res.status(500).json({
            message: 'Erro ao deletar Venda'
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
