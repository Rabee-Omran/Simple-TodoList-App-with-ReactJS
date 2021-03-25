import React, { Component } from 'react';

class CreateTask extends Component{

  

  render(){

     
    return (
      
        <div>
             <input value = {this.props.newTask} onChange={this.props.onChange}/>
             <button onClick = {this.props.onClick} >Add Task</button>
        </div>
    );
  }
}

export default CreateTask;














