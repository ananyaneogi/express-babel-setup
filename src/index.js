import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.static('public'))

const PORT = process.env.PORT || 3002
app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`),
);