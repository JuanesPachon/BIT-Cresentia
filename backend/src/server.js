import express from 'express';
import cors from 'cors';
import "dotenv/config"

const port = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const router = express.Router();
const induccionController = require('../controllers/induccionController');

router.post('/', induccionController.createInduccion);
router.get('/', induccionController.getInducciones);
router.get('/:id', induccionController.getInduccionById);
router.put('/:id', induccionController.updateInduccion);
router.delete('/:id', induccionController.deleteInduccion);

module.exports = router;