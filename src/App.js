import React, { Component } from 'react';
import Task from './components/Task';
import CreateTask from './components/CreateTask';
class App extends Component{

  state = {
    newTask : '',
    todos :[
      {'text':'learn ReactJS'},
    
    ]

  }

  completeTask (index){

    const todos = [...this.state.todos]
    todos.splice(index,1)
    this.setState({todos})

  }

  addTask() {

    const todos = [...this.state.todos]
    todos.push({
      text: this.state.newTask
    })
    this.setState({
      todos,
      newTask:''
    })

  }
  updateNewTask = (event) =>{
    this.setState({
      newTask:event.target.value,

    })
  }

  render(){

     
    return (
      
      <div>
        <ul>
        { this.state.todos.map((todo, index) =><Task key={index} todo = {todo} completeTask ={ () => this.completeTask(index)} /> ) }
        </ul>
        <CreateTask newTask= {this.state.newTask} onChange = {this.updateNewTask} onClick= {() => this.addTask()}/>
       
      </div>
    );
  }
}

export default App;
