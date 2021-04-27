import {Router} from "express";
import  * as matricula_controller from "../controllers/matricula";

export const matricula_router = Router();
matricula_router.route("/matricula")
.post(matricula_controller.crearMatricua)
.get(matricula_controller.listarMatricula);

matricula_router.route("/matricula/:id")
  .get(matricula_controller.listarMatriculaId)
  .put(matricula_controller.actualizarMatricula)
  .delete(matricula_controller.eliminarMatricula);
