import alumno_model from "../models/alumno";
import matricula_model from "../models/matricula";

export const Alumno = alumno_model();
export const Matricula = matricula_model();

Alumno.hasMany(Matricula,{
  foreignKey:{
    name:"alumno_id",
    allowNull:false,
  },
});
Matricula.belongsTo(Alumno,{
  foreignKey:"alumno_id"
});