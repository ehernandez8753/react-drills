import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  
  constructor(){
    super();

    this.state ={
      taskInput: "",
      listOfTasks: []
    }
  }

  updateTaskInput(value){
    this.setState({
      taskInput: value
    })
  }

  addTask(taskToAdd){
    let newTaskList = [...this.state.listOfTasks];
    newTaskList.push(taskToAdd);

    this.setState({
      listOfTasks: newTaskList
    })
    
  }
  
  render() {
    let jobList = this.state.listOfTasks.map((task, index) => {
      return <Todo key={index} task={task} />;
    })

    return (
      <div className="App">
        <h1>My Todo List:</h1>
        <input placeholder="Enter new task" onChange={(event) => this.updateTaskInput(event.target.value)}></input>
        <button onClick={() => this.addTask(this.state.taskInput)}>Add</button>

        <br/>

        {jobList}
      </div>
    );
  }
}

export default App;
