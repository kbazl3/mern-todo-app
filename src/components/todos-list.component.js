import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


const Todo = props => (
    <tr> 
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={'/edit/'+props.todo._id}>Edit</Link>
        </td>
    </tr>
)


export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data})
                console.log(this.state)
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    todolist() {
        return this.state.todos.map((currentTodo, index) => {
            return <Todo todo={currentTodo} key={index} />;
        })
    }

    render() {
        return(
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todolist()}
                    </tbody>
                </table>
            </div>
        )
    }

}