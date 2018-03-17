'use strict';
module.exports = (sequelize, DataTypes) => {
  var FormEntry = sequelize.define('FormEntry', {
    value: DataTypes.STRING
  }, {});
  FormEntry.associate = function(models) {
    // associations can be defined here
  };
  return FormEntry;
};