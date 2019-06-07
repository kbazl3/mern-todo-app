import React, {Component} from 'react';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: "",
            todo_responsible: "",
            todo_priority: "",
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        })
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`submitted`);
        console.log(`todo description: ${this.state.todo_description}`);
        console.log(`todo priority: ${this.state.todo_priority}`)
        console.log(`todo responsible: ${this.state.todo_responsible}`)
        console.log(`todo completed: ${this.state.todo_completed}`)

        this.setState({
            todo_description: "",
            todo_responsible: "",
            todo_priority: "",
            todo_completed: false
        })
    }

    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}></input>
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}></input>
                    </div>
                </form>
            </div>
        )
    }

}