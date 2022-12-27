const { Model, DataTypes } = require('sequelize') ;

class Product extends Model {
    static init(sequelize) {
        super.init(
        {
            user_id: {
            type: DataTypes.STRING,
            },
            name: {
            type: DataTypes.STRING,
            },
            price: {
            type: DataTypes.FLOAT,
            }
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
        this.belongsTo(models.User, { foreignKey: "user_id" });
        //belongsTo - pertence a
    }
}

module.exports = Product;
