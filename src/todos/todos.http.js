const todosControllers = require('./todos.controllers')

const getAll = (req, res) => {
    const data = todosControllers.getAllTodos()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if(id){
        const data = todosControllers.getTodoById(id)
        if(data.id){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Ivalid ID'})
        }
    } else {
        res.status(400).json({message: 'Id is not a number'})
    } 
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if(typeof id === 'number'){
        const deleted = todosControllers.deleteTodo(id)
        if(deleted){
            res.status(204).json({message: 'Todo was Elimined'})
        } else {
            res.status(400).json({message: 'Try with another ID'})
        }
    }else {
        res.status(400).json({message: 'Invalid ID'})
    }
}

const create = (req, res) => {
    const data = req.body
    if (data.title && data.description && data.status){
        const response = todosControllers.createTodo(data)
        res.status(201).json(response)
    } else {
        res.status(400).json({message: "Invaid arguments"})
    }
}

const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.title && data.description && data.status){
        const response = todosControllers.editTodo(id, data)
        res.status(201).json({message: 'Todos edited succesfully', data: response})
    }else {
        res.status(400).json({message: "Invalid Arguments"})
    }
}

module.exports = {
    getAll,
    getById,
    deleteById,
    create,
    update
}