// Hi :)
import express from 'express';
import { createInduccion, getInducciones, getInduccionById, updateInduccion, deleteInduccion } from '../controllers/induccionController.js';

const router = express.Router();

router.post('/', createInduccion);
router.get('/', getInducciones);
router.get('/:id', getInduccionById);
router.put('/:id', updateInduccion);
router.delete('/:id', deleteInduccion);

export default router;