module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Message;
};
