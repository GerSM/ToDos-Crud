const express = require("express");
const todosRouter = require('./todos/todos.router').router

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Tijuana!!" });
});

//? Aqui se encuentran las rutas de mis usuarios
app.use('/api/v1', todosRouter)

app.listen(8000, () => {
    console.log("Server started at port 8000");
  });