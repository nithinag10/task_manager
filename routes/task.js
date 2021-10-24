const express = require('express')
const router = express.Router()
const {getAllTask , createTask , getSingleTask , updateTask , deleteTask} = require('../controllers/task')
const Schema = require('../models/Tasks')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getSingleTask).put(updateTask).delete(deleteTask)

module.exports =router
