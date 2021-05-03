import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";


class App extends Component {
  
  
  state = {
    abc: false,
    greased: false,
    weight: false
  }
  
  
  

  showGreasedPigs = () => {
    this.setState({greased: !this.state.greased})
    // console.log("simulating greased pigs click")
  }

  showAbcPigs = () => {
    this.setState({abc: !this.state.abc, weight: false})
  }

  showWeightPigs = () => {
    this.setState({weight: !this.state.weight, abc: false})
  }
  
  
  render() {

    this.state.abc ? hogs.sort((a,b) => (a.name > b.name) ? 1 : -1) : null
    

    this.state.weight ? hogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1) : null
    

    return (
      <div className="App">
        <Nav state={this.state} showGreasedPigs={this.showGreasedPigs} showAbcPigs={this.showAbcPigs} showWeightPigs={this.showWeightPigs} />
        
        
        {this.state.greased ? hogs.filter(hogs => hogs.greased).map(hogObj => <HelloWorld hog={hogObj} />) : hogs.map(hogObj => <HelloWorld hog={hogObj}/>)}
        
      </div>
    );
  }
}

export default App;
