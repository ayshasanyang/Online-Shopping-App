const bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User",  {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    // comparing unhashed password to entered by the user to the hashed password stored in the database 
//     User.prototype.validpassword = function(password) {
//         return bcrypt.compareSync(password, this.password);
//     };

//     User.addHook("beforeCreate", function(user) {
//         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     })
return User;
};