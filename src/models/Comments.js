'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('comments', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            comment: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_At: {
                type: Sequelize.DATA,
                allowNull: false,
            },
            updated_At: {
                type: Sequelize.DATA,
                allowNull: false,
            }

        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('comments');
    }
};
