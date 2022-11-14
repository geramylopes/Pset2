const { syncBuiltinESMExports } = require("module");
const todoModel = require('../Models')

exports.getAllTodos = (req, res) => {
        const todos = todoModel.getTodos

        res.status(200).json(todos);
}

exports.getOneTodo = (req, res) => {

        let num = req.params.id;
        res.status(200).json(todos[num]);   
}

exports.addTodo = (req, res) => {
        const todo = req.body;
        //validate the length of the title and description
        let todoTitle = todo.title
        let todoDescription = todo.description

        if (todoTitle.length <= 5){
                res.send("Error: Invalid Title length")
}
        if (todoDescription.length <= 10){
                 res.send("Error: Invalid Description length")
}       

        res.status(201).send("Criado com Sucesso!")    
}

exports.UpdateTodo = (req, res)=>{
        const {id} = req.params;
        //validate the length of the title and description
        let todoTitle = todo.title
        let todoDescription = todo.description

        if (todoTitle.length <= 10){
                res.send("Error: Invalid Title length")
        }

        if (todoDescription.length <= 20){
                 res.send("Error: Invalid Description length")
                }

        
        res.send("Successfully update");  
        
        
}



exports.DeleteTodo = (req,res)=>{
        let {id} = req.params;
        

        res.send(`Successfully removed.`);
    
    }