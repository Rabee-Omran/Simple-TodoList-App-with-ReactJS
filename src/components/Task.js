import React, { Component } from 'react';

class Task extends Component{

  

  render(){

     
    return (
      
            <li>
               {this.props.todo.text} <button onClick = {this.props.completeTask} >Done</button>      
            </li>
    
    );
  }
}

export default Task;














