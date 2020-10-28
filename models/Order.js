// Creating Products model 
module.exports = function(sequelize, DataTypes) {
    const Order = sequelize.define("Order", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
    });
    Order.associate = function(models) {
        Order.belongsToMany(models.Product, {
    
        });
    }
    return Order;
    }