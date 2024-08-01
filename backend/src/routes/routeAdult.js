import { Router } from "express";
import controllerAdult from "../controllers/controllerAdult.js";

const routeAdult = Router();

routeAdult.post('/adult', controllerAdult.createAdultUser)
routeAdult.get('/adult', controllerAdult.findAdultUser)
routeAdult.get('/family/:id', controllerAdult.findAllAdultUsers)

export default routeAdult;