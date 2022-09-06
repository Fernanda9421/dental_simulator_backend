const Client = (sequelize, Datatypes) => {
  const Client = sequelize.define("Client", {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: Datatypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Client.associate = (models) => {
    Client.hasMany(models.Attendance, {
      foreignKey: 'clientId', as: 'clients',
    });
  };

  return Client;
};

module.exports = Client;
