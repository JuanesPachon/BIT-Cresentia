import express from 'express';
import controllerFamily from '../controllers/controllerFamily';

const router = express.Router();

router.post('/family', controllerFamily.createUser);
router.get('/family', controllerFamily.listUsers);
router.get('/family/:id', controllerFamily.findUser);

export default router;