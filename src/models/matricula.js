import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize";

export default()=>
conexion.define(
  "matricula",
  {
    matriculaId:{
      allowNull:false,
      type:DataTypes.INTEGER,
      primaryKey:true,
      field:"id",
      autoIncrement:true,
      unique:true,
    },
    matriculaPeriodo:{
      type:DataTypes.STRING(10),
      field:"periodo",
    },    
  },
  {
    tableName:"matricula",
    timestamp:true,
    createdAt:"fechaReg",
    updatedAt:"fechaMod",
  }
)