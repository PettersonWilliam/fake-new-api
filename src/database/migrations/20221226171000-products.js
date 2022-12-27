module.exports = {
	async up(queryInterface, Sequelize) {
	  await queryInterface.createTable('products', {
		id: {
		  type: Sequelize.INTEGER,
		  allowNull: false,
		  autoIncrement: true,
		  primaryKey: true,
		},
		user_id: {
		  type: Sequelize.INTEGER,
		  allowNull: false,
		  references: {
			model: {
			  tableName: 'users',
			},
			key: 'id'
		  },
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		  },
		price: {
		  type: Sequelize.FLOAT,
		  allowNull: false,
		},
		deleted_at: {
		  type: Sequelize.DATE,
		  allowNull: true,
		  defaultValue: null
		},
		created_at: {
		  allowNull: false,
		  type: Sequelize.DATE,
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
		  allowNull: false,
		  type: Sequelize.DATE,
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
		}
	  });
	},

	async down(queryInterface) {
	  await queryInterface.dropTable('products');
	},
  };
