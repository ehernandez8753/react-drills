import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imageUrl="https://i.redd.it/a5zydqhk1fo21.jpg"/>
      </div>
    );
  }
}

export default App;
