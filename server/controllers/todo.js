const Todo = require('../models/todo');

exports.getAllTodo = async (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) => res.status(400).json('Error: ' + err));
};

exports.createTodo = async (req, res) => {
    Todo.create(req.body)
        .then((data) => res.json({ message: 'Todo created successfully', data }))
        .catch((err) => res.status(400).json({ message: "could not add todo", eroor: err.message }));
};

exports.updateTodo = async (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: 'Todo updated successfully', data }))
        .catch((err) => res.status(400).json({ message: "could not update todo", eroor: err.message }));
};

exports.deleteTodo = async (req, res) => {
    Todo.findByIdAndDelete(req.params.id, req.body)
        .then((data) => res.json({ message: 'Todo deleted successfully', data }))
        .catch((err) => res.status(400).json({ message: "could not delete todo", eroor: err.message }));
};