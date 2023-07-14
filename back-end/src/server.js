import express from 'express'
// require('dotenv').config();
import 'dotenv/config';
import { PORT } from './utils/constants.js'
import { taskRouter } from './router/tasks.js'
import cors from 'cors'
import { categoryRouter } from './router/categories.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use(taskRouter);
app.use(categoryRouter);

app.listen(PORT, () => console.log('Server is running on port ' + PORT));
