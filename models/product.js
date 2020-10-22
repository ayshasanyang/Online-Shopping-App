// Creating Products model
module.exports = function(sequelize, DataTypes) {
const Product = sequelize.define("Product", {
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
    }
  });
Product.associate = function(models) {
    Product.belongsTo(models.User, {});

  
};
  return Product;
};
