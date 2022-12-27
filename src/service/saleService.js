module.exports = () => {
    const Sale = require('../models/Sale');
    const Product = require('../models/Product');

    const create = async (data) => {
        const sale = await Sale.create(data);

        return sale;

    };


    const index = async (filter) => {
        const sales = await Sale.findAll({ 
            attributes: ['product_id'],
            where: {
                deleted_at: null
            },
            include: {
                model: Product,
            },
            paranoid: false

        });

        return sales;
    }

    const show = async (filter) => {
        const sale = await Sale.findOne({
            where: {
                id: filter.id,
                deleted_at: null
            },
            paranoid: false
        });

        if(!sale) {
            throw new Error('A venda não existe');
        }
        return sale;
    }

    const update = async (changes,filter) => {
        await Sale.update(changes, {
            where: {
                id: filter.id,
                deleted_at: null
            },
            paranoid: false
        });

        return true;
    }

    const remove = async (id) => {
        await Sale.destroy({
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
        index,
        show,
        update,
        remove
    }
};