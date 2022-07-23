import { request, response, Router } from "express";
import { addControllerRegister } from "../../shared/useCases/AddRegister";
import { listControllerUsers } from "../../shared/useCases/ListRegister";
import { editControllerRegister } from "../../shared/useCases/EditRegister";
import { deleteRegisterController } from "../../shared/useCases/DeleteRegister";
import { addControllerMaster } from "../../shared/useCases/AddRegisterMaster";
import { checkJwt } from "../middlewares/CheckJwt";
import { loginControllerUsers } from "../../shared/useCases/Login";

const router = Router();

router.post("/register", (request, response) => {
  return addControllerMaster.handle(request, response);
});

router.post("/login", (request, response) => {
  return loginControllerUsers.handle(request, response);
});

router.post("/register/student", checkJwt, (request, response) => {
  return addControllerRegister.handle(request, response);
});
router.get("/listUser/:cpf?", checkJwt, (request, response) => {
  return listControllerUsers.handle(request, response);
});
router.put("/editRegister", checkJwt, (request, response) => {
  return editControllerRegister.handle(request, response);
});
router.delete("/deleteRegister/:cpf?", checkJwt, (request, response) => {
  return deleteRegisterController.handle(request, response);
});
export { router };
