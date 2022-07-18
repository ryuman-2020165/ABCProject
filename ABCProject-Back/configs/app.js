'use strict'

const taskRoutes = require('../src/routes/task.routes');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const port = 3200 || process.env.port;


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use('/task', taskRoutes);

exports.initServer = ()=> app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});