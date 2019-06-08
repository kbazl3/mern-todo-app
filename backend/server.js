const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      todoRoutes = express.Router(),
      port = 4000;

let Todo = require('./todo.model');

mongoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB connection established successfully');
})

app.use(cors());
app.use(bodyParser.json());

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(error, todos) {
        if (error) {
            console.log(error)
        } else {
            res.json(todos)
        }
    })
})

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(error, todo) {
        if (error) {
            console.log(error)
        } else {
            res.json(todo);
        }
    })
})

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body)
    todo.save()
        .then(function(todo) {
            res.status(200).json('todo added successfully')
        })
        .catch(function(error) {
            res.status(400).send("adding new todo failed")
        })
})

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo) {
            res.status(404).send('Data is not found')
        } else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_description;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then(function(todo) {
                res.json('todo updated')
            })
            .catch(function(err) {
                res.status(400).send('update not possible')
            })
        }
    })
})

app.use('/todos', todoRoutes)

app.listen(port, function() {
    console.log('Listening on port: ' + port);
})