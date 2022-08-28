const todosDB = [
    {
    id:1,
    title: 'Pokedex',
    description: 'Realizar porkedex',
    status: 'Termianda',
},
{
    id:2,
    title: 'Api todos',
    description: 'Realizar API todos',
    status: 'Pendiente',
},
{
    id:3,
    title: 'Api accesCrontol',
    description: 'Realizar Api Access control',
    status: 'Pendiente',
}]

const getAllTodos = () => {
    return todosDB
}

const getTodoById = (id) => {
    const filteredDb = todosDB.filter((todo) => todo.id === id)
    return filteredDb[0]
}

const createTodo = (todoObj) => {
    if(todosDB.length === 0){
        const newTodo = {
            id : 1,
            title : todoObj.title,
            description : todo.description 
        };
        todosDB.push(newTodo)
        return todosDB
    }
    const newTodo = {
        id: todosDB[todosDB.length - 1].id + 1,
        title: todoObj.title,
        description: todoObj.description
    };
    todosDB.push(newTodo)
    return newTodo
};

const deleteTodo = (id) => {
    const index = todosDB.findIndex((item) => item.id === id)
    if(index != -1){
        todosDB.splice(index, 1)
        return true
    }
    return false
}

const editTodo = (id, data) => {
    const index = todosDB.findIndex((item) => item.id === id)
    if(index != -1){
        todosDB[index] = data
        return todosDB[index]
    } else {
        createTodo(data)
        return todosDB.at(-1)
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    editTodo
}