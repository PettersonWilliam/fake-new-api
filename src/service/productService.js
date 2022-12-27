module.exports = () => {
    const Product = require('../models/Product');
    const jwt = require('jsonwebtoken');
    const { compareSync } = require('bcrypt');

    const create = async (data) => {
        const product = await Product.findOne({
            where: {
                name: data.name,
                deleted_at: null
            },
            paranoid: false
        });

        if(product) {
            throw new Error('O produto já existe');
        }

        return await Product.create(data);

    }


    const index = async () => {
        const products = await Product.findAll({ attributes: ['id','name', 'price'] });

        return products;
    }

    const show = async (filter) => {
        const product = await Product.findOne({
            where: {
                id: filter.id,
                deleted_at: null
            },
            paranoid: false
        });

        if(!product) {
            throw new Error('Produto não existe');
        }
        return product;
    }

    const update = async (changes,filter) => {
        const product = await Product.update(changes, {
            where: {
                id: filter.id,
                deleted_at: null
            },
            paranoid: false
        });

        return product;
    }

    const remove = async (id) => {
        await Product.destroy({
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