const express = require('express');
require('dotenv').config();
const { PORT } = require('./utils/constants.js');
const { taskRouter } = require('./router/tasks.js');
const cors = require('cors');
const { categoryRouter } = require('./router/categories.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(taskRouter);
app.use(categoryRouter);

app.listen(PORT, () => console.log('Server is running on port ' + PORT));
