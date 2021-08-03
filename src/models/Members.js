module.exports = function (sequelize, Sequelize) {
  let Members = sequelize.define("Members", {
    first_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return Members;
};
