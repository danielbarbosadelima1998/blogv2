const { Model, DataTypes } = require('sequelize')

class Authors extends Model {
    static init(conection) {
        super.init(
            {
                id: {
                    type: DataTypes.UUIDV4,
                    primaryKey: true,
                    defaultValue: DataTypes.UUIDV4,
                },
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                username: DataTypes.STRING,
                password: DataTypes.STRING,
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE
            },
            {
                sequelize: conection
            }
        )
    }



    // static associate(models){
    // }
}
module.exports = Authors;