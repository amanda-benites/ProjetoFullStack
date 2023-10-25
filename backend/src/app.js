const express         = require('express');
const cors            = require('cors');
const app             = express();
const userRouter = require('./routes/userRouter');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT);
app.use('/api', userRouter);

module.exports = app;