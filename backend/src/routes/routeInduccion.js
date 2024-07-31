// Hi :)
const express = require('express');
const router = express.Router();
const induccionController = require('../controllers/induccionController');

router.post('/', induccionController.createInduccion);
router.get('/', induccionController.getInduccions);
router.get('/:id', induccionController.getInduccionById);
router.put('/:id', induccionController.updateInduccion);
router.delete('/:id', induccionController.deleteInduccion);

module.exports = router;