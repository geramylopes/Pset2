const { title } = require('process');
const db = require('../Config/database');

class Todo{
    static async getTodos() {
        try {
            const Todo = await db.query("SELECT * FROM Todo");
            console.log(Todo)
            return Todo.rows;
        } catch (error) {
            console.error(error.message);
        }
    }

    static async addTodos(){
        try {
            
            await db.query("INSERT INTO Todos_db (Title, Descripcion) VALUES($1, $2) RETURNING *", [title, description]);
        } catch (error) {
            console.log("Error" +error)
        }
    }
}
module.exports = Todo;