// import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('contacts', {
      id: DataTypes.UUID,
      ownerId: DataTypes.UUID,
      value: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('contacts');
  },
};
