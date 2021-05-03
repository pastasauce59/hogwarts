import React, { Component } from "react";
import augustus from "../hog-imgs/augustus_gloop.jpg"
import HogDetails from "./HogDetails";




class HelloWorld extends Component {

state = {
  details: false
}

handleClick = () => {
  this.setState({details: !this.state.details})
}


  render() {
    
    return (
      <div onClick={this.handleClick} className="hogCardsDiv">
        <h1>{this.props.hog.name}</h1>
        <img src={this.props.hog.image} alt=""></img>
        <br></br>
       {this.state.details ? <HogDetails hogData={this.props.hog} /> : null }
      </div>
    );
  }
}

export default HelloWorld;
