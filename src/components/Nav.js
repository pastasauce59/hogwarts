import piggy from "../porco.png";
import React from "react";


const Nav = (props) => {
  // console.log(props)
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br></br>
      
      <button onClick={props.showGreasedPigs}>{props.state.greased ? "No Grease Please" : "Show Me The Grease!"}</button>
      {props.state.abc ? null : <button onClick={props.showAbcPigs}>Alphabetical Order</button>}
      {props.state.weight ? null : <button onClick={props.showWeightPigs}>By Weight</button>}
    </div>
  );
};

export default Nav;
