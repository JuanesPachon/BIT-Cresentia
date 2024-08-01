import { Router } from "express";
import controllerAdult from "../controllers/controllerAdult.js";

const routeAdult = Router();

routeAdult.post('/', controllerAdult.createAdultUser)
routeAdult.get('/', controllerAdult.findAdultUser)
routeAdult.get('/:id', controllerAdult.findAllAdultUsers)

export default routeAdult;