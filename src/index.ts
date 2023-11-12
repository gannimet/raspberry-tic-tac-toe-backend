import cors from 'cors';
import express, { json } from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ isWorkingWithTypescript: true });
});

app.listen(port);
