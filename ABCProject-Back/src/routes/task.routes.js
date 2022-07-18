'use strict'

const taskController = require('../controllers/task.controller');
const express = require('express');
const api = express.Router();

api.post('/addTask', taskController.addTask);
api.get('/getTasks', taskController.getTasks);
api.get('/getTask/:id', taskController.getTask);
api.put('/updateTask/:id', taskController.updateTask);
api.delete('/deleteTask/:id', taskController.deleteTask);

module.exports = api;