const Installment = (sequelize, Datatypes) => {
  const Installment = sequelize.define("Installment", {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    installmentValue: Datatypes.DECIMAL,
    dueDate: Datatypes.DATEONLY,
    attendanceId: { type: Datatypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
  });

  Installment.associate = (models) => {
    Installment.belongsTo(models.Attendance, {
      foreignKey: 'attendanceId', as: 'attendances',
    });
  }

  return Installment;
};

module.exports = Installment;
