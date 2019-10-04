module.exports = function(sequelize, DataTypes) {
    var Liked = sequelize.define("Liked", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Liked.associate = function(models) {
        Liked.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Liked;
};