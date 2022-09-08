const Treatment = (sequelize, Datatypes) => {
  const Treatment = sequelize.define("Treatment", {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: Datatypes.STRING,
    totalPrice: Datatypes.DECIMAL,
  },
  {
    timestamps: false,
    underscored: true,
  });

  Treatment.associate = (models) => {
    Treatment.hasMany(models.Attendance, {
      foreignKey: 'treatmentId', as: 'treatments',
    });
  };

  return Treatment;
};

module.exports = Treatment;
