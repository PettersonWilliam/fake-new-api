const { Model, DataTypes } = require('sequelize') ;

class Sale extends Model {
    static init(sequelize) {
        super.init(
        {
            product_id: {
            type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at"
        });

    }
    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: "product_id" })
    }
}

module.exports = Sale;