module.exports = {
	async up(queryInterface, Sequelize) {
	  await queryInterface.createTable('sales', {
		id: {
		  type: Sequelize.INTEGER,
		  allowNull: false,
		  autoIncrement: true,
		  primaryKey: true,
		},
		product_id: {
		  type: Sequelize.INTEGER,
		  allowNull: false,
		  references: {
			model: {
			  tableName: 'products',
			},
			key: 'id'
		  },
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
	  await queryInterface.dropTable('sales');
	},
  };
