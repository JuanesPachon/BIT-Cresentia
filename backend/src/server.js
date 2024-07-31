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