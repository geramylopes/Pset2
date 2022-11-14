const express = require('express')
const todosController = require('./Controlers')
const app = express();
const port = 3010;



app.use(express.json())






//let todos=[]

app.listen(port,() => {
  console.log(`Server running `);
});



//get all todo
app.get('/todos', todosController.getAllTodos);


//get single todo
app.get('/todos/:id', todosController.getOneTodo);

//create a todo
app.post('/todos/add', todosController.addTodo);

//Update a todo
app.put("/update/up", todosController.UpdateTodo);

//delete a todo
app.delete('/todos/del', todosController.DeleteTodo);