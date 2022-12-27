const { Model, DataTypes } = require('sequelize') ;
const bcrypt = require('bcrypt');

class User extends Model {
    static init(sequelize) {
        super.init(
        {
            name: {
            type: DataTypes.STRING,
            },
            email: {
            type: DataTypes.STRING,
            },
            password: {
            type: DataTypes.STRING,
            }
        },
        {
            sequelize,
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            hooks: {
                beforeCreate: async (user, options) => {
                    if (user.password) {
                    user.password = await bcrypt.hash(user.password, 6);
                    }
                }
            }
        });

    }
    static associate(models) {
        this.hasMany(models.Product, { foreignKey: "user_id" });
        //hasMany tem muitos produtos
    }
}

module.exports = User;
