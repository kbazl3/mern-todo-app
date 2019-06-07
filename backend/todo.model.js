const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    },
    todo_date_created: {
        type: Date
    }
})

module.exports = mongoose.model('Todo', Todo);