'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Posts', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            authorId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Authors',
                    key: 'id',
                }
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            }

        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Posts');
    }
};
