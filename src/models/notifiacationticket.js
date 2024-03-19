'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotifiacationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotifiacationTicket.init({
    subject:{
      types: DataTypes.STRING,
      allowNull: false
    },
    content:{
      types: DataTypes.STRING,
      allowNull: false
    },
    recepientEmail:{
      types: DataTypes.STRING,
      allowNull: false
    },
    status: {
      types: DataTypes.ENUM,
      allowNull: false,
      values: ["PENDING","SUCCESS","FAILED"]
    },
    notification: {
      types: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'NotifiacationTicket',
  });
  return NotifiacationTicket;
};