import {Router} from "express";
import  * as alumno_controller from "../controllers/alumno";

export const alumno_router = Router();
alumno_router.route("/alumnos")
.post(alumno_controller.crearAlumno)
.get(alumno_controller.listarAlumnos);

alumno_router.route("/alumnos/:id")
  .get(alumno_controller.listarAlumnoId)
  .put(alumno_controller.actualizarAlumno)
  .delete(alumno_controller.eliminarAlumno);

