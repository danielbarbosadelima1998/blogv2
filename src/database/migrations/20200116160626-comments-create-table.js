'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Comments', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            like: {
                type: Sequelize.INTEGER,
            },
            postId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Posts',
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

    down: (queryInterface) => {
        return queryInterface.dropTable('Comments');
    }
};
