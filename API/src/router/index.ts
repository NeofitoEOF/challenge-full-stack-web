import { request, response, Router } from "express";
import { addControllerRegister } from "../useCases/AddRegister";
import { listControllerUsers } from "../useCases/ListRegister";
import { editControllerRegister } from "../useCases/EditRegister";
import { deleteRegisterController } from "../useCases/DeleteRegister";
import { addControllerMaster } from "../useCases/AddRegisterMaster";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.post("/register", (request, response) => {
  return addControllerMaster.handle(request, response);
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
