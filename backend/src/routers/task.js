const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

//Add Task 
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Get Tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Complete Tasks 
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!task) return res.status(404).send(e)

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Delete Tasks
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) return res.status(404).send(e)

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router