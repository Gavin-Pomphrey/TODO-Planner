const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;