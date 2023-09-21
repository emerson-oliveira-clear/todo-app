const express = require('express')
const Task = require('./../api/todo/todo')

const routes = express.Router()

routes.post('/api/todos', async(req,res) => {

    console.log(req.body)

    const saveTask = await Task.create({description: req.body.description})

    res.send(saveTask) 
    console.log('task criada') 

})

routes.put('/api/todos', async(req,res) => {
 
     await Task.findOneAndUpdate({description: req.body.description},{done: req.body.done})
     
     res.end()
    
})

routes.delete('/api/todos/:id', async(req,res) => {

    console.log(req.params.id)
    await Task.deleteOne({ _id: req.params.id })

    res.end() 
   
})

routes.get('/api/todos', async(req, res)=>{

    const result = await Task.find({})
    res.send(result)

})

module.exports = routes