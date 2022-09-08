const Attendance = (sequelize, Datatypes) => {
  const Attendance = sequelize.define("Attendance", {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    attendanceDate: Datatypes.DATEONLY,
    treatmentId: { type: Datatypes.INTEGER, foreignKey: true },
    clientId: { type: Datatypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
  });

  Attendance.associate = (models) => { 
    Attendance.belongsTo(models.Treatment, {
      foreignKey: 'treatmentId', as: 'treatments',
    });

    Attendance.belongsTo(models.Client, {
      foreignKey: 'clientId', as: 'clients',
    });    

    Attendance.hasMany(models.Installment, {
      foreignKey: 'attendanceId', as: 'attendances',
    });
  };

  return Attendance;
};

module.exports = Attendance;
