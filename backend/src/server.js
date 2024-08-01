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

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import induccionRoutes from './routes/inducciones.js';

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/cresentia', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/inducciones', induccionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});