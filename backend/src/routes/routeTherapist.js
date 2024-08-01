import express from 'express';
import controllerTherapist from '../controllers/controllerTherapist';

const router = express.Router();

router.post('/family', controllerTherapist.createNewTherapist);
router.get('/family', controllerTherapist.listUsers);
router.get('/family/:id', controllerTherapist.findUser);

export default router;